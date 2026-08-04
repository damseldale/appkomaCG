import type {
  CharacterObject,
  ImageObject,
  SceneObject,
  TextObject,
} from "./types";

export function isCharacter(
  object: SceneObject,
): object is CharacterObject {
  return object.type === "character";
}

export function isImage(
  object: SceneObject,
): object is ImageObject {
  return object.type === "image";
}

export function isText(
  object: SceneObject,
): object is TextObject {
  return object.type === "text";
}
