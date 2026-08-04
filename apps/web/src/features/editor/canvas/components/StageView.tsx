"use client";

import { Stage, Layer, Rect } from "react-konva";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "../constants";

export function StageView() {
  return (
    <Stage
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    >
      <Layer>
        <Rect
          x={0}
          y={0}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill="white"
        />
      </Layer>
    </Stage>
  );
}
