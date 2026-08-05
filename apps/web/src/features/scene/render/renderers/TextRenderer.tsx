"use client";

import { Group, Text } from "react-konva";

import type { TextObject } from "@/features/objects";
import { useSceneStore } from "../../store";

interface Props {
    object: TextObject;
}

export function TextRenderer({
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
            <Text
                x={object.transform.x}
                y={object.transform.y}
                text={object.text}
                fontSize={
                    object.fontSize
                }
                fill={object.color}
            />

            {selected && (
                <Group listening={false}>
                    <Text
                        x={object.transform.x}
                        y={object.transform.y}
                        text={object.text}
                        fontSize={
                            object.fontSize
                        }
                        stroke="#2563EB"
                        strokeWidth={1}
                    />
                </Group>
            )}
        </Group>
    );
}
