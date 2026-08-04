import type { ComponentType } from "react";

import type { SceneObject } from "@/features/objects";

import {
    CharacterRenderer,
    GroupRenderer,
    ImageRenderer,
    ShapeRenderer,
    TextRenderer,
} from "./renderers";

type Renderer<T extends SceneObject = SceneObject> =
    ComponentType<{
        object: T;
    }>;

export const rendererRegistry = {
    character: CharacterRenderer,

    image: ImageRenderer,

    text: TextRenderer,

    shape: ShapeRenderer,

    group: GroupRenderer,
} satisfies Record<
    SceneObject["type"],
    Renderer
>;
