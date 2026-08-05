"use client";

import { useEffect } from "react";

import { useSceneObjects } from "../selectors";

import { bootstrapRenderers } from "./bootstrap";
import { ObjectRenderer } from "./ObjectRenderer";

export function SceneRenderer() {
    const objects = useSceneObjects();

    useEffect(() => {
        bootstrapRenderers();
    }, []);

    return (
        <>
            {objects.map((object) => (
                <ObjectRenderer
                    key={object.id}
                    object={object}
                />
            ))}
        </>
    );
}
