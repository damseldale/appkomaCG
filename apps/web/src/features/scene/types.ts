import type { SceneObject } from "../objects";

export type ObjectId = string;

export interface SceneState {
  objects: Record<ObjectId, SceneObject>;

  rootIds: ObjectId[];

  selectedIds: ObjectId[];
}
