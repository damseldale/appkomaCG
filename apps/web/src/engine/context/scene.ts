import type { SceneObject } from "@/features/objects";

export interface SceneActions {
  addObject(
    object: SceneObject,
  ): void;

  removeObject(
    id: string,
  ): void;

  updateObject(
    id: string,
    patch: Partial<SceneObject>,
  ): void;

  selectObject(
    id: string,
  ): void;

  clearSelection(): void;
}
