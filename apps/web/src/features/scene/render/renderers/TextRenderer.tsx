"use client";

import {
    Group,
    Text,
} from "react-konva";

import type {
    TextObject,
} from "@/features/objects";

import {
    useObjectInteraction,
} from "../useObjectInteraction";

interface Props {
    object: TextObject;
}

export function TextRenderer({
    object,
}: Props) {

    const interaction =
        useObjectInteraction(
            object,
        );
    const selection =
    SelectionController();

    return (
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
            <Text
                text={object.text}
                fontSize={object.fontSize}
                fill={object.color}
            />
        </Group>
    );
}
