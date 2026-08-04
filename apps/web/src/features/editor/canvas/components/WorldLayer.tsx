"use client";

import { PropsWithChildren } from "react";
import { Group, Rect } from "react-konva";

import { useCanvasStore } from "../store";

export function WorldLayer({
  children,
}: PropsWithChildren) {
  const camera = useCanvasStore(
    (state) => state.camera,
  );

  return (
    <Group
      x={camera.x}
      y={camera.y}
      scaleX={camera.zoom}
      scaleY={camera.zoom}
    >
      {/* Canvas / Scene Background */}
      <Rect
        x={0}
        y={0}
        width={1920}
        height={1080}
        fill="#ffffff"
        listening={false}
      />

      {children}
    </Group>
  );
}
