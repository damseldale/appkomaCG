"use client";

import { Circle, Rect } from "react-konva";

import type { ShapeObject } from "@/features/objects";

interface Props {
  object: ShapeObject;
}

export function ShapeRenderer({
  object,
}: Props) {
  switch (object.shape) {
    case "circle":
      return (
        <Circle
          x={object.transform.x}
          y={object.transform.y}
          radius={50}
          fill="#34d399"
        />
      );

    case "rect":
    default:
      return (
        <Rect
          x={object.transform.x}
          y={object.transform.y}
          width={120}
          height={80}
          fill="#34d399"
        />
      );
  }
}
