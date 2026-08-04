"use client";

import { Text } from "react-konva";

import type { SceneObject } from "../../objects";

interface ObjectRendererProps {
  object: SceneObject;
}

export function ObjectRenderer({
  object,
}: ObjectRendererProps) {
  switch (object.type) {
    case "text":
      return (
        <Text
          x={object.transform.x}
          y={object.transform.y}
          text={object.text}
          fontSize={object.fontSize}
          fontFamily={object.fontFamily}
        />
      );

    case "shape":
      return (
        <Text
          x={object.transform.x}
          y={object.transform.y}
          text={`Shape (${object.shape})`}
        />
      );

    case "image":
      return (
        <Text
          x={object.transform.x}
          y={object.transform.y}
          text="Image"
        />
      );

    case "character":
      return (
        <Text
          x={object.transform.x}
          y={object.transform.y}
          text="Character"
        />
      );

    case "group":
      return null;

    default:
      return null;
  }
}
