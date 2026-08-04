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
    const Renderer =
        getRenderer(object.type);

    if (!Renderer) {
        return null;
    }

    return (
        <Renderer
            object={object}
        />
    );
}
