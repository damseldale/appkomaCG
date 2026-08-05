"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";
import type {
    KonvaEventObject,
} from "konva/lib/Node";

import { useSceneStore } from "../store";
import { nodeRegistry } from "../render/NodeRegistry";

interface TransformLike {
    x: number;
    y: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
}

interface ObjectLike {
    id: string;
    transform: TransformLike;
}

export function useObjectInteraction(
    object: ObjectLike,
) { 

    const selectObject =
    useSceneStore(
        state =>
            state.selectObject,
        );

    const toggleObjectSelection =
    useSceneStore(
        state =>
            state.toggleObjectSelection,
        );

    const ref =
        useRef<Konva.Group>(null);

    const updateTransform =
        useSceneStore(
            state => state.updateTransform,
        );

    useEffect(() => {

        const node =
            ref.current;

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

    function handlePointerDown(
    e: KonvaEventObject<MouseEvent>,
) {

    e.cancelBubble = true;

    const multi =
        e.evt.ctrlKey ||
        e.evt.metaKey;

    if (multi) {

        toggleObjectSelection(
            object.id,
        );

        return;
    }

    selectObject(
        object.id,
    );

}

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

    return {

        ref,

        groupProps: {

            x:
                object.transform.x,

            y:
                object.transform.y,

            rotation:
                object.transform.rotation,

            scaleX:
                object.transform.scaleX,

            scaleY:
                object.transform.scaleY,

            draggable: true,

            onPointerDown:
                handlePointerDown,

            onDragEnd:
                handleDragEnd,


        },

    };

}
