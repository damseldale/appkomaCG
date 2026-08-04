import { nanoid } from "nanoid";

import { DEFAULT_TRANSFORM } from "./constants";

import type {
  CharacterObject,
  GroupObject,
  ImageObject,
  SceneObject,
  ShapeObject,
  TextObject,
} from "./types";

export function createCharacter(): CharacterObject {
  return {
    id: nanoid(),
    type: "character",
    name: "Character",

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,
    locked: false,

    characterId: undefined,
    pose: "idle",
    expression: "neutral",
  };
}

export function createImage(): ImageObject {
  return {
    id: nanoid(),
    type: "image",
    name: "Image",

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,
    locked: false,

    src: "",

    width: 300,
    height: 300,
  };
}

export function createText(): TextObject {
  return {
    id: nanoid(),
    type: "text",
    name: "Text",

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,
    locked: false,

    text: "New Text",

    fontSize: 48,

    fontFamily: "Inter",
  };
}

export function createShape(): ShapeObject {
  return {
    id: nanoid(),
    type: "shape",
    name: "Shape",

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,
    locked: false,

    shape: "rect",
  };
}

export function createGroup(): GroupObject {
  return {
    id: nanoid(),
    type: "group",
    name: "Group",

    transform: {
      ...DEFAULT_TRANSFORM,
    },

    visible: true,
    locked: false,

    children: [],
  };
}

export function createObject(
  type: SceneObject["type"],
): SceneObject {
  switch (type) {
    case "character":
      return createCharacter();

    case "image":
      return createImage();

    case "text":
      return createText();

    case "shape":
      return createShape();

    case "group":
      return createGroup();
  }
}
