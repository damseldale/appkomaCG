"use client";

import { useEffect } from "react";

import { useSceneObjects } from "../selectors";

import { bootstrapRenderers } from "./bootstrap";
import { ObjectRenderer } from "./ObjectRenderer";

import { KeyboardController } from "./controllers/KeyboardController";
import { TransformerController } from "./controllers/TransformerController";

export function SceneRenderer() {

    const objects =
        useSceneObjects();

    useEffect(() => {

        bootstrapRenderers();

    }, []);

    return (
        <>
            {objects.map(
                object => (
                    <ObjectRenderer
                        key={object.id}
                        object={object}
                    />
                ),
            )}

            <KeyboardController />

            <TransformerController />
        </>
    );

}
