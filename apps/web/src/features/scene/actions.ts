import type {
    ObjectId,
    SceneState,
} from "./types";

import type {
    SceneObject,
    Transform,
} from "../objects";

export interface SceneActions {

    addObject(
        object: SceneObject,
    ): void;

    removeObject(
        id: ObjectId,
    ): void;

    duplicateObject(
        id: ObjectId,
    ): void;

    updateTransform(
        id: ObjectId,
        transform: Partial<Transform>,
    ): void;

    renameObject(
        id: ObjectId,
        name: string,
    ): void;

    lockObject(
        id: ObjectId,
    ): void;

    unlockObject(
        id: ObjectId,
    ): void;

    showObject(
        id: ObjectId,
    ): void;

    hideObject(
        id: ObjectId,
    ): void;

    selectObject(
        id: ObjectId,
    ): void;

    clearSelection(): void;

}
