"use client";

import { useEffect, useRef } from "react";

import Konva from "konva";
import { Transformer } from "react-konva";

import { useSceneStore } from "../../store";
import { nodeRegistry } from "../NodeRegistry";

import { commandManager } from "../../history/CommandManager";
import { TransformCommand } from "../../history/commands/TransformCommand";

export function TransformerController() {

    const transformerRef =
        useRef<Konva.Transformer>(null);

    const selectedIds =
        useSceneStore(
            state => state.selectedIds,
        );

    const objects =
        useSceneStore(
            state => state.objects,
        );

    useEffect(() => {

        const transformer =
            transformerRef.current;

        if (!transformer) {
            return;
        }

        const nodes =
            selectedIds
                .map(id =>
                    nodeRegistry.get(id),
                )
                .filter(
                    (
                        node,
                    ): node is Konva.Node =>
                        node !== undefined,
                );

        transformer.nodes(nodes);

        transformer.getLayer()?.batchDraw();

    }, [selectedIds]);

    function handleTransformEnd() {

        const transformer =
            transformerRef.current;

        if (!transformer) {
            return;
        }

        const nodes =
            transformer.nodes();

        nodes.forEach(
            node => {

                const object =
                    objects[
                        node.id()
                    ];

                if (!object) {
                    return;
                }

                commandManager.execute(

                    new TransformCommand(

                        node.id(),

                        {
                            ...object.transform,
                        },

                        {
                            x:
                                node.x(),

                            y:
                                node.y(),

                            rotation:
                                node.rotation(),

                            scaleX:
                                node.scaleX(),

                            scaleY:
                                node.scaleY(),

                        },

                    ),

                );

            },
        );

    }

    return (
        <Transformer
            ref={transformerRef}
            onTransformEnd={
                handleTransformEnd
            }
            rotateEnabled
            resizeEnabled
            borderStroke="#2563EB"
            borderStrokeWidth={2}
            anchorFill="#FFFFFF"
            anchorStroke="#2563EB"
            anchorSize={8}
            keepRatio={false}
            ignoreStroke
        />
    );

}
