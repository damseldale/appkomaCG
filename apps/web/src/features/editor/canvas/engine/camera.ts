import type { CameraState } from "../store";
import type { CameraContext, Point } from "./types";

export interface CameraBounds {
  minZoom: number;
  maxZoom: number;
}

export const DEFAULT_CAMERA_BOUNDS: CameraBounds = {
  minZoom: 0.1,
  maxZoom: 10,
};

export function createCamera(): CameraState {
  return {
    x: 0,
    y: 0,
    zoom: 1,
  };
}

export function cloneCamera(
  camera: CameraState,
): CameraState {
  return {
    x: camera.x,
    y: camera.y,
    zoom: camera.zoom,
  };
}

export function translateCamera(
  camera: CameraState,
  delta: Point,
): CameraState {
  return {
    ...camera,
    x: camera.x + delta.x,
    y: camera.y + delta.y,
  };
}

export function setCameraZoom(
  camera: CameraState,
  zoom: number,
  bounds: CameraBounds = DEFAULT_CAMERA_BOUNDS,
): CameraState {
  const clampedZoom = Math.max(
    bounds.minZoom,
    Math.min(bounds.maxZoom, zoom),
  );

  return {
    ...camera,
    zoom: clampedZoom,
  };
}

export function getViewportCenter(
  context: CameraContext,
): Point {
  return {
    x: context.viewport.width / 2,
    y: context.viewport.height / 2,
  };
}
