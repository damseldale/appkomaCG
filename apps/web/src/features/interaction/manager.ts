import { getBehaviors } from "./registry";
import type { PointerEventContext } from "./types";

export function pointerDown(
  context: PointerEventContext,
) {
  for (const behavior of getBehaviors()) {
    behavior.onPointerDown?.(context);
  }
}

export function pointerMove(
  context: PointerEventContext,
) {
  for (const behavior of getBehaviors()) {
    behavior.onPointerMove?.(context);
  }
}

export function pointerUp(
  context: PointerEventContext,
) {
  for (const behavior of getBehaviors()) {
    behavior.onPointerUp?.(context);
  }
}
