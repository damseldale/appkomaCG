import type {
  InteractionBehavior,
} from "./types";

const behaviors: InteractionBehavior[] = [];

export function registerBehavior(
  behavior: InteractionBehavior,
) {
  behaviors.push(behavior);
}

export function getBehaviors() {
  return behaviors;
}
