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
  ): void;

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

  clearSelection(): void;

  lockObject(
    id: string,
  ): void;

  unlockObject(
    id: string,
  ): void;

  hideObject(
    id: string,
  ): void;

  showObject(
    id: string,
  ): void;
}
