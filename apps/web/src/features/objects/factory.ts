import { nanoid } from "nanoid";

import { DEFAULT_TRANSFORM } from "./constants";

import type {
  ObjectType,
  SceneObject,
} from "./types";

export function createObject(
  type: ObjectType,
  name?: string,
): SceneObject {
  return {
    id: nanoid(),

    type,

    name:
      name ??
      `${type}-${Date.now()}`,

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,

    locked: false,
  };
}
