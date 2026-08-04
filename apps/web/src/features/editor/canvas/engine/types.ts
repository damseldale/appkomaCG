import type { CameraState } from "../store";

export interface Point {
  x: number;
  y: number;
}

export interface Viewport {
  width: number;
  height: number;
}

export interface CameraContext {
  viewport: Viewport;
  camera: CameraState;
}
