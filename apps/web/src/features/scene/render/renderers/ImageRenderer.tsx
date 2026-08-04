"use client";

import { Rect, Text } from "react-konva";

import type { ImageObject } from "@/features/objects";

interface Props {
  object: ImageObject;
}

export function ImageRenderer({
  object,
}: Props) {
  return (
    <>
      <Rect
        x={object.transform.x}
        y={object.transform.y}
        width={object.width}
        height={object.height}
        fill="#e5e7eb"
        stroke="#9ca3af"
      />

      <Text
        x={object.transform.x}
        y={object.transform.y}
        width={object.width}
        align="center"
        text="IMAGE"
      />
    </>
  );
}
