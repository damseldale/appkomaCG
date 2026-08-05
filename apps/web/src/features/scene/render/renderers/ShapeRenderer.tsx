"use client";

import { Group, Rect } from "react-konva";

import type { ShapeObject } from "@/features/objects";
import { useSceneStore } from "../../store";

interface Props {
    object: ShapeObject;
}

export function ShapeRenderer({
    object,
}: Props) {

    const selectedIds = useSceneStore(
        state => state.selectedIds,
    );

    const selectObject = useSceneStore(
        state => state.selectObject,
    );

    const selected = selectedIds.includes(
        object.id,
    );

    return (
        <Group
            onClick={(e) => {
                e.cancelBubble = true;
                selectObject(object.id);
            }}
        >
            <Rect
                x={object.transform.x}
                y={object.transform.y}
                width={object.width}
                height={object.height}
                fill={object.fill}
                stroke={
                    selected
                        ? "#2563EB"
                        : object.stroke
                }
                strokeWidth={
                    selected
                        ? 2
                        : object.strokeWidth
                }
            />
        </Group>
    );
}
