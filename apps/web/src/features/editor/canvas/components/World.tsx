"use client";

import { Layer, Rect } from "react-konva";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "../constants";

export function World() {
  return (
    <Layer>
      <Rect
        x={0}
        y={0}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        fill="white"
      />
    </Layer>
  );
}
