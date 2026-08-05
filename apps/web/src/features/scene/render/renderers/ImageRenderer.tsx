"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";

import type {
    KonvaEventObject,
} from "konva/lib/Node";

import {
    Group,
    Rect,
    Text,
} from "react-konva";

import type {
    ImageObject,
} from "@/features/objects";

import {
    useSceneStore,
} from "../../store";

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
            rotation={
                object.transform.rotation
            }
            scaleX={
                object.transform.scaleX
            }
            scaleY={
                object.transform.scaleY
            }
            draggable
            onDragEnd={
                handleDragEnd
            }
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
                width={
                    object.width
                }
                align="center"
                text="IMAGE"
                listening={false}
            />
        </Group>
    );
}
