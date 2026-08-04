"use client";

import type { SceneObject } from "@/features/objects";

import {
  CharacterRenderer,
  GroupRenderer,
  ImageRenderer,
  ShapeRenderer,
  TextRenderer,
} from "./renderers";

interface Props {
  object: SceneObject;
}

export function ObjectRenderer({
  object,
}: Props) {
  switch (object.type) {
    case "character":
      return (
        <CharacterRenderer
          object={object}
        />
      );

    case "image":
      return (
        <ImageRenderer
          object={object}
        />
      );

    case "text":
      return (
        <TextRenderer
          object={object}
        />
      );

    case "shape":
      return (
        <ShapeRenderer
          object={object}
        />
      );

    case "group":
      return (
        <GroupRenderer
          object={object}
        />
      );
  }
}
