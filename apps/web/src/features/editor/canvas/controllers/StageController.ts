import type { KonvaEventObject } from "konva/lib/Node";
import type { MouseEvent, WheelEvent } from "react";

import { zoomAtPointer } from "../engine/zoom";
import { panCamera } from "../engine/pan";
import { useCanvasStore } from "../store";

export interface StageController {
  onWheel(
    e: KonvaEventObject<WheelEvent>,
  ): void;

  onMouseDown(
    e: KonvaEventObject<MouseEvent>,
  ): void;

  onMouseMove(
    e: KonvaEventObject<MouseEvent>,
  ): void;

  onMouseUp(
    e: KonvaEventObject<MouseEvent>,
  ): void;
}

export function createStageController(): StageController {
  let dragging = false;
  let lastPointer = { x: 0, y: 0 };

  return {
    onWheel(e) {
      e.evt.preventDefault();

      const stage = e.target.getStage();
      if (!stage) return;

      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      const store = useCanvasStore.getState();

      const result = zoomAtPointer(
        {
          camera: store.camera,
          viewport: store.viewport,
        },
        pointer,
        e.evt.deltaY,
      );

      store.setCamera(result.camera);
    },

    onMouseDown(e) {
      if (e.evt.button !== 1) return; // middle mouse

      const stage = e.target.getStage();
      if (!stage) return;

      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      dragging = true;
      lastPointer = pointer;
    },

    onMouseMove(e) {
      if (!dragging) return;

      const stage = e.target.getStage();
      if (!stage) return;

      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      const delta = {
        x: pointer.x - lastPointer.x,
        y: pointer.y - lastPointer.y,
      };

      lastPointer = pointer;

      const store = useCanvasStore.getState();

      const result = panCamera(
        {
          camera: store.camera,
          viewport: store.viewport,
        },
        delta,
      );

      store.setCamera(result.camera);
    },

    onMouseUp() {
      dragging = false;
    },
  };
}
