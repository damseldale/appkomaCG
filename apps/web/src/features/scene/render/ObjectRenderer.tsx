"use client";

import type { SceneObject } from "@/features/objects";

import {
    getRenderer,
} from "./registry";

interface Props {
    object: SceneObject;
}

export function ObjectRenderer({
    object,
}: Props) {
    const Renderer = getRenderer(
        object.type,
    );

    if (!Renderer) {
        console.warn(
            `[Renderer] No renderer registered for "${object.type}"`,
        );

        return null;
    }

    return (
        <Renderer
            object={object}
        />
    );
}
