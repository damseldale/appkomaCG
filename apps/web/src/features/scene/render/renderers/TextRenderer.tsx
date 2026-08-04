"use client";

import { Text } from "react-konva";

import type { TextObject } from "@/features/objects";

interface Props {
  object: TextObject;
}

export function TextRenderer({
  object,
}: Props) {
  return (
    <Text
      x={object.transform.x}
      y={object.transform.y}
      text={object.text}
      fontSize={object.fontSize}
      fontFamily={object.fontFamily}
      fill="#111827"
    />
  );
}
