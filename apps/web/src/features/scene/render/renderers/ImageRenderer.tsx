"use client";

import {
    Group,
    Rect,
    Text,
} from "react-konva";

import type {
    ImageObject,
} from "@/features/objects";

import {
    useObjectInteraction,
} from "../../hooks/useObjectInteraction";

interface Props {
    object: ImageObject;
}

export function ImageRenderer({
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
                fill="#E5E7EB"
                stroke="#9CA3AF"
            />

            <Text
                y={
                    object.height / 2 - 8
                }
                width={object.width}
                align="center"
                text="IMAGE"
                listening={false}
            />
        </Group>
    );
}
