import type {
  CameraContext,
  Point,
} from "./types";

/**
 * Screen -> World
 */
export function screenToWorld(
  context: CameraContext,
  point: Point,
): Point {
  return {
    x:
      (point.x - context.camera.x) /
      context.camera.zoom,

    y:
      (point.y - context.camera.y) /
      context.camera.zoom,
  };
}

/**
 * World -> Screen
 */
export function worldToScreen(
  context: CameraContext,
  point: Point,
): Point {
  return {
    x:
      point.x * context.camera.zoom +
      context.camera.x,

    y:
      point.y * context.camera.zoom +
      context.camera.y,
  };
}

/**
 * Screen Delta -> World Delta
 */
export function screenDeltaToWorld(
  context: CameraContext,
  delta: Point,
): Point {
  return {
    x:
      delta.x /
      context.camera.zoom,

    y:
      delta.y /
      context.camera.zoom,
  };
}

/**
 * World Delta -> Screen Delta
 */
export function worldDeltaToScreen(
  context: CameraContext,
  delta: Point,
): Point {
  return {
    x:
      delta.x *
      context.camera.zoom,

    y:
      delta.y *
      context.camera.zoom,
  };
}
