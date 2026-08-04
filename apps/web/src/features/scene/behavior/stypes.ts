import type { ComponentType } from "react";
import type { SceneObject } from "@/features/objects";

export interface BehaviorProps {
  object: SceneObject;
}

export type BehaviorComponent =
  ComponentType<BehaviorProps>;
