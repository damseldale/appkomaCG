import type {
  BehaviorComponent,
} from "./types";

const registry: BehaviorComponent[] = [];

export function registerBehavior(
  behavior: BehaviorComponent,
) {
  registry.push(behavior);
}

export function getBehaviors() {
  return registry;
}
