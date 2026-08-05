import type {
    SceneObject,
    Transform,
} from "@/features/objects";

import {
    useSceneStore,
} from "@/features/scene/store";

import type {
    SceneActions,
} from "./SceneActions";

export class SceneActionsImpl
    implements SceneActions {

    addObject(
        object: SceneObject,
    ) {
        useSceneStore
            .getState()
            .addObject(object);
    }

    removeObject(
        id: string,
    ) {
        useSceneStore
            .getState()
            .removeObject(id);
    }

    duplicateObject(
        id: string,
    ) {
        return useSceneStore
            .getState()
            .duplicateObject(id);
    }

    getObject(
        id: string,
    ) {
        return useSceneStore
            .getState()
            .objects
            .find(
                object =>
                    object.id === id,
            );
    }

    updateObject(
        id: string,
        patch: Partial<SceneObject>,
    ) {
        useSceneStore
            .getState()
            .updateObject(
                id,
                patch,
            );
    }

    updateTransform(
        id: string,
        transform: Partial<Transform>,
    ) {
        useSceneStore
            .getState()
            .updateTransform(
                id,
                transform,
            );
    }

    moveObject(
        id: string,
        x: number,
        y: number,
    ) {
        this.updateTransform(
            id,
            {
                x,
                y,
            },
        );
    }

    selectObject(
        id: string,
    ) {
        useSceneStore
            .getState()
            .selectObject(id);
    }

    setSelection(
        ids: string[],
    ) {
        useSceneStore
            .getState()
            .setSelection(ids);
    }

    clearSelection() {
        useSceneStore
            .getState()
            .clearSelection();
    }

    hideObject(
        id: string,
    ) {
        this.updateObject(
            id,
            {
                visible: false,
            },
        );
    }

    showObject(
        id: string,
    ) {
        this.updateObject(
            id,
            {
                visible: true,
            },
        );
    }

    lockObject(
        id: string,
    ) {
        this.updateObject(
            id,
            {
                locked: true,
            },
        );
    }

    unlockObject(
        id: string,
    ) {
        this.updateObject(
            id,
            {
                locked: false,
            },
        );
    }

}
