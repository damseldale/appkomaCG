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

    const selectedIds =
        useSceneStore(
            state => state.selectedIds,
        );

    const selectObject =
        useSceneStore(
            state => state.selectObject,
        );

    const selected =
        selectedIds.includes(
            object.id,
        );

    return (
        <Group
            onClick={(e) => {
                e.cancelBubble = true;

                selectObject(
                    object.id,
                );
            }}
        >
            <Rect
                x={object.transform.x}
                y={object.transform.y}
                width={object.width}
                height={object.height}
                fill="#E5E7EB"
                stroke={
                    selected
                        ? "#2563EB"
                        : "#9CA3AF"
                }
                strokeWidth={
                    selected
                        ? 2
                        : 1
                }
            />

            <Text
                x={object.transform.x}
                y={object.transform.y + object.height / 2 - 8}
                width={object.width}
                align="center"
                text="IMAGE"
                listening={false}
            />
        </Group>
    );
}
