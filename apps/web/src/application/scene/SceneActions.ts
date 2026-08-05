import type {
    SceneObject,
    Transform,
} from "@/features/objects";

export interface SceneActions {

    addObject(
        object: SceneObject,
    ): void;

    removeObject(
        id: string,
    ): void;

    duplicateObject(
        id: string,
    ): string;

    getObject(
        id: string,
    ): SceneObject | undefined;

    updateObject(
        id: string,
        patch: Partial<SceneObject>,
    ): void;

    updateTransform(
        id: string,
        transform: Partial<Transform>,
    ): void;

    moveObject(
        id: string,
        x: number,
        y: number,
    ): void;

    selectObject(
        id: string,
    ): void;

    setSelection(
        ids: string[],
    ): void;

    clearSelection(): void;

    hideObject(
        id: string,
    ): void;

    showObject(
        id: string,
    ): void;

    lockObject(
        id: string,
    ): void;

    unlockObject(
        id: string,
    ): void;

}
