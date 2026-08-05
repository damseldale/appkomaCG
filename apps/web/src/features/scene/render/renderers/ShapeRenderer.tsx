"use client";

import {
    Group,
    Rect,
} from "react-konva";

import type {
    ShapeObject,
} from "@/features/objects";

import {
    useObjectInteraction,
} from "../useObjectInteraction";

interface Props {
    object: ShapeObject;
}

export function ShapeRenderer({
    object,
}: Props) {

    const interaction =
        useObjectInteraction(
            object,
        );

    return (
        <Group
            ref={interaction.ref}
            {...interaction.groupProps}
        >
            <Rect
                width={object.width}
                height={object.height}
                fill={object.fill}
                stroke={object.stroke}
                strokeWidth={object.strokeWidth}
            />
        </Group>
    );
}
