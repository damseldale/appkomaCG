"use client";

import { Stage, Layer, Rect } from "react-konva";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "../constants";

import { useCanvasStore } from "../store";

export function StageView() {
  const camera = useCanvasStore(
    (state) => state.camera,
  );

  return (
    <Stage
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      scaleX={camera.zoom}
      scaleY={camera.zoom}
      x={camera.x}
      y={camera.y}
    >
      <Layer>
        <Rect
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill="white"
        />
      </Layer>
    </Stage>
  );
}
