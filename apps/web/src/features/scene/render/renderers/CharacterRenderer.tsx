"use client";

import {
    Group,
    Circle,
    Text,
} from "react-konva";

import type {
    CharacterObject,
} from "@/features/objects";

import {
    useSceneStore,
} from "../../store";

import {
    useObjectInteraction,
} from "../../hooks/useObjectInteraction";

interface Props {
    object: CharacterObject;
}

export function CharacterRenderer({
    object,
}: Props) {

    const interaction =
        useObjectInteraction(
            object,
        );

    const selectedIds =
        useSceneStore(
            state =>
                state.selectedIds,
        );

    const selected =
        selectedIds.includes(
            object.id,
        );

    return (
        <Group
            ref={interaction.ref}
            {...interaction.groupProps}
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
                x={-40}
                y={52}
                width={80}
                align="center"
                text="Character"
                listening={false}
            />
        </Group>
    );
}
