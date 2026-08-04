import {
    registerRenderer,
} from "./registry";

import {
    CharacterRenderer,
    GroupRenderer,
    ImageRenderer,
    ShapeRenderer,
    TextRenderer,
} from "./renderers";

let initialized = false;

export function bootstrapRenderers() {
    if (initialized) {
        return;
    }

    initialized = true;

    registerRenderer(
        "character",
        CharacterRenderer,
    );

    registerRenderer(
        "image",
        ImageRenderer,
    );

    registerRenderer(
        "text",
        TextRenderer,
    );

    registerRenderer(
        "shape",
        ShapeRenderer,
    );

    registerRenderer(
        "group",
        GroupRenderer,
    );
}
