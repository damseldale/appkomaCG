import { MAX_ZOOM, MIN_ZOOM } from "../constants";

export function clampZoom(value: number) {
  return Math.max(
    MIN_ZOOM,
    Math.min(MAX_ZOOM, value),
  );
}
