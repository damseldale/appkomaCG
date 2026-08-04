"use client";

import { Circle, Text } from "react-konva";

import type { CharacterObject } from "@/features/objects";

interface Props {
  object: CharacterObject;
}

export function CharacterRenderer({
  object,
}: Props) {
  return (
    <>
      <Circle
        x={object.transform.x}
        y={object.transform.y}
        radius={32}
        fill="#8ec5ff"
        stroke="#2563eb"
        strokeWidth={2}
      />

      <Text
        x={object.transform.x - 40}
        y={object.transform.y + 42}
        width={80}
        align="center"
        text={object.name}
      />
    </>
  );
}
