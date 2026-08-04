export interface CameraState {
  x: number;
  y: number;
  zoom: number;
}

export type EditorTool =
  | "select"
  | "move"
  | "rotate"
  | "bone"
  | "pose";

export interface EditorState {
  camera: CameraState;

  tool: EditorTool;

  selectedId: string | null;

  playing: boolean;

  currentFrame: number;

  snap: boolean;

  showGrid: boolean;
}
