"use client";

import type { PropsWithChildren } from "react";
import { Group, Layer, Rect } from "react-konva";

import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
} from "../constants";

import { useCanvasStore } from "../store";

interface WorldLayerProps
  extends PropsWithChildren {}

export function WorldLayer({
  children,
}: WorldLayerProps) {
  const camera = useCanvasStore(
    (state) => state.camera,
  );

  return (
    <Layer>
      <Group
        x={camera.x}
        y={camera.y}
        scaleX={camera.zoom}
        scaleY={camera.zoom}
      >
        <Rect
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill="white"
        />

        {children}
      </Group>
    </Layer>
  );
}
