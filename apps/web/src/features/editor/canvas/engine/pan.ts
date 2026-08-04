import type { CameraContext, Point } from "./types";
import type { CameraState } from "../store";

export interface PanResult {
  camera: CameraState;
}

export function panCamera(
  context: CameraContext,
  delta: Point,
): PanResult {
  return {
    camera: {
      ...context.camera,
      x: context.camera.x + delta.x,
      y: context.camera.y + delta.y,
    },
  };
}
