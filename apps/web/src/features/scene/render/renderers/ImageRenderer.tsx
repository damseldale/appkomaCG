"use client";

import { Group, Rect, Text } from "react-konva";

import type { ImageObject } from "@/features/objects";
import { useSceneStore } from "../../store";

interface Props {
  object: ImageObject;
}

export function ImageRenderer({
  object,
}: Props) {
  const selectObject = useSceneStore(
    (state) => state.selectObject,
  );

  const selected = useSceneStore(
    (state) =>
      state.selectedIds.includes(
        object.id,
      ),
  );

  return (
    <Group
      onClick={(event) => {
        event.cancelBubble = true;
        selectObject(object.id);
      }}
    >
      <Rect
        x={object.transform.x}
        y={object.transform.y}
        width={object.width}
        height={object.height}
        fill="#e5e7eb"
        stroke={
          selected
            ? "#2563eb"
            : "#9ca3af"
        }
        strokeWidth={
          selected ? 2 : 1
        }
      />

      <Text
        x={object.transform.x}
        y={object.transform.y}
        width={object.width}
        align="center"
        verticalAlign="middle"
        text="IMAGE"
        listening={false}
      />
    </Group>
  );
}
