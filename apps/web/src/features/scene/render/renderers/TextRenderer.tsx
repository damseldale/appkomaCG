"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";

import {
    Group,
    Text,
} from "react-konva";

import type {
    TextObject,
} from "@/features/objects";

import {
    nodeRegistry,
} from "../NodeRegistry";

interface Props {
    object: TextObject;
}

export function TextRenderer({
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
            <Text
                x={object.transform.x}
                y={object.transform.y}
                text={object.text}
                fontSize={object.fontSize}
                fill={object.color}
            />
        </Group>
    );
}
