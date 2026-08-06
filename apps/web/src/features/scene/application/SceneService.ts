import type {
    SceneObject,
    Transform,
} from "../objects";

import {
    useSceneStore,
} from "../store";

export class SceneService {

    addObject(
        object: SceneObject,
    ) {

        useSceneStore
            .getState()
            .addObject(
                object,
            );

    }

    removeObject(
        id: string,
    ) {

        useSceneStore
            .getState()
            .removeObject(
                id,
            );

    }

    duplicateObject(
        id: string,
    ) {

        useSceneStore
            .getState()
            .duplicateObject(
                id,
            );

    }

    updateTransform(
        id: string,
        transform: Transform,
    ) {

        useSceneStore
            .getState()
            .updateTransform(
                id,
                transform,
            );

    }

    selectObject(
        id: string,
    ) {

        useSceneStore
            .getState()
            .selectObject(
                id,
            );

    }

    clearSelection() {

        useSceneStore
            .getState()
            .clearSelection();

    }

    getObject(
        id: string,
    ) {

        return useSceneStore
            .getState()
            .objects[id];

    }

    getObjects() {

        return useSceneStore
            .getState()
            .objects;

    }

}

export const sceneService =
    new SceneService();
