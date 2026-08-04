import type { KonvaEventObject } from "konva/lib/Node";
import type { WheelEvent } from "react";

import { zoomAtPoint } from "../engine/zoom";
import { useCanvasStore } from "../store";

export interface StageController {
  onWheel(
    event: KonvaEventObject<WheelEvent>,
  ): void;
}

export function createStageController(): StageController {
  return {
    onWheel(event) {
      event.evt.preventDefault();

      const stage = event.target.getStage();

      if (!stage) {
        return;
      }

      const pointer = stage.getPointerPosition();

      if (!pointer) {
        return;
      }

      const { camera, setCamera } =
        useCanvasStore.getState();

      const result = zoomAtPoint(
        camera,
        pointer,
        event.evt.deltaY,
      );

      setCamera(result.camera);
    },
  };
}
