import type { SceneObject } from "@/features/objects";

export interface PointerEventContext {
  object: SceneObject;
  x: number;
  y: number;
}

export interface InteractionBehavior {
  onPointerDown?(
    context: PointerEventContext,
  ): void;

  onPointerMove?(
    context: PointerEventContext,
  ): void;

  onPointerUp?(
    context: PointerEventContext,
  ): void;
}
