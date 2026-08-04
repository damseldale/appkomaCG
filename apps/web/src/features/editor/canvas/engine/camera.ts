import type {
  CameraContext,
  Point,
} from "./types";

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
