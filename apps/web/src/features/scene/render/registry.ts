import type { ComponentType } from "react";

import type { SceneObject } from "@/features/objects";

export type ObjectRendererComponent =
    ComponentType<{
        object: SceneObject;
    }>;

const registry = new Map<
    SceneObject["type"],
    ObjectRendererComponent
>();

export function registerRenderer(
    type: SceneObject["type"],
    renderer: ObjectRendererComponent,
) {
    registry.set(type, renderer);
}

export function getRenderer(
    type: SceneObject["type"],
) {
    return registry.get(type);
}

export function hasRenderer(
    type: SceneObject["type"],
) {
    return registry.has(type);
}

export function clearRendererRegistry() {
    registry.clear();
}
