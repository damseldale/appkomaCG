"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";

import {
    Group,
    Rect,
    Text,
} from "react-konva";

import type {
    ImageObject,
} from "@/features/objects";

import {
    nodeRegistry,
} from "../NodeRegistry";

interface Props {
    object: ImageObject;
}

export function ImageRenderer({
    object,
}: Props) {

    const groupRef =
        useRef<Konva.Group>(null);

    useEffect(() => {

        const node =
            groupRef.current;

        if (!node) {
            return;
        }

        nodeRegistry.register(
            object.id,
            node,
        );

        return () => {

            nodeRegistry.unregister(
                object.id,
            );

        };

    }, [object.id]);

    return (
        <Group
            ref={groupRef}
        >
            <Rect
                x={object.transform.x}
                y={object.transform.y}
                width={object.width}
                height={object.height}
                fill="#E5E7EB"
                stroke="#9CA3AF"
            />

            <Text
                x={object.transform.x}
                y={
                    object.transform.y +
                    object.height / 2 -
                    8
                }
                width={object.width}
                align="center"
                text="IMAGE"
            />
        </Group>
    );
}
