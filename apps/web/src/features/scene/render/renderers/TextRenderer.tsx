"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";

import {
    Group,
    Text,
} from "react-konva";

import type {
    KonvaEventObject,
} from "konva/lib/Node";

import type {
    TextObject,
} from "@/features/objects";

import {
    useSceneStore,
} from "../../store";

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

    const updateTransform =
        useSceneStore(
            state => state.updateTransform,
        );

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

    function handleDragEnd(
        e: KonvaEventObject<DragEvent>,
    ) {

        const node =
            e.target;

        updateTransform(
            object.id,
            {
                x: node.x(),
                y: node.y(),
            },
        );

    }

    return (
        <Group
            ref={groupRef}
            x={object.transform.x}
            y={object.transform.y}
            draggable
            onDragEnd={
                handleDragEnd
            }
        >
            <Text
                text={object.text}
                fontSize={
                    object.fontSize
                }
                fill={
                    object.color
                }
            />
        </Group>
    );
}
