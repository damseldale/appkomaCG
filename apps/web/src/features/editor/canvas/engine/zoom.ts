import { MAX_ZOOM, MIN_ZOOM } from "../constants";

import type { CameraState } from "../store";

export interface ZoomResult {
  camera: CameraState;
}

export function zoomAtPoint(
  camera: CameraState,
  pointer: {
    x: number;
    y: number;
  },
  deltaY: number,
): ZoomResult {
  const zoomFactor = deltaY < 0 ? 1.1 : 0.9;

  const nextZoom = Math.max(
    MIN_ZOOM,
    Math.min(
      MAX_ZOOM,
      camera.zoom * zoomFactor,
    ),
  );

  const worldX =
    (pointer.x - camera.x) /
    camera.zoom;

  const worldY =
    (pointer.y - camera.y) /
    camera.zoom;

  return {
    camera: {
      zoom: nextZoom,

      x:
        pointer.x -
        worldX * nextZoom,

      y:
        pointer.y -
        worldY * nextZoom,
    },
  };
}
