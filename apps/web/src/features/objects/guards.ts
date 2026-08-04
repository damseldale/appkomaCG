import type {
  SceneObject,
} from "./types";

export function isLocked(
  object: SceneObject,
) {
  return object.locked;
}

export function isVisible(
  object: SceneObject,
) {
  return object.visible;
}
