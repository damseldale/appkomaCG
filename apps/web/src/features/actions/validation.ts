import type { SceneObject } from "@/features/objects";

export function validateSceneObject(
  object: SceneObject,
) {
  if (!object.id) {
    throw new Error(
      "SceneObject.id is required",
    );
  }
}
