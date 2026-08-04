"use client";

import type { SceneObject } from "@/features/objects";

import { rendererRegistry } from "./registry";

interface Props {
    object: SceneObject;
}

export function ObjectRenderer({
    object,
}: Props) {
    const Renderer =
        rendererRegistry[
            object.type
        ];

    return (
        <Renderer
            object={object as never}
        />
    );
}
