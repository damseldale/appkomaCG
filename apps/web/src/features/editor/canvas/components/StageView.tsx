"use client";

import { Stage } from "react-konva";

import { useStageController } from "../hooks/useStageController";
import { useCanvasStore } from "../store";

import { GridLayer } from "./GridLayer";
import { OverlayLayer } from "./OverlayLayer";
import { WorldLayer } from "./WorldLayer";

export function StageView() {
  const viewport = useCanvasStore((state) => state.viewport);

  const controller = useStageController();

  if (viewport.width === 0 || viewport.height === 0) {
    return null;
  }

  return (
    <Stage
      width={viewport.width}
      height={viewport.height}
      onWheel={controller.onWheel}
    >
      <GridLayer />

      <WorldLayer />

      <OverlayLayer />
    </Stage>
  );
}
