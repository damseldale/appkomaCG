export interface ViewportState {
  width: number;
  height: number;
}

export interface CameraState {
  x: number;
  y: number;
  zoom: number;
}

export interface CanvasState {
  viewport: ViewportState;
  camera: CameraState;
}
