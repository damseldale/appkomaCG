"use client";

import { Group, Circle, Text } from "react-konva";

import type { CharacterObject } from "@/features/objects";
import { useSceneStore } from "../../store";

interface Props {
    object: CharacterObject;
}

export function CharacterRenderer({
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
        const selection =
    SelectionController();

<Group
    ref={groupRef}
    draggable
    onPointerDown={(e) =>
        selection.handleObjectPointerDown(
            e,
            object.id,
        )
    }
>
            <Circle
                radius={40}
                fill="#FACC15"
                stroke={
                    selected
                        ? "#2563EB"
                        : "#EAB308"
                }
                strokeWidth={
                    selected
                        ? 3
                        : 2
                }
            />

            <Text
                y={52}
                width={80}
                x={-40}
                align="center"
                text="Character"
                listening={false}
            />
        </Group>
    );
}
