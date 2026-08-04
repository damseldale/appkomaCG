export type ObjectType =
  | "character"
  | "image"
  | "text"
  | "shape"
  | "group";

export interface Transform {
  x: number;
  y: number;

  rotation: number;

  scaleX: number;
  scaleY: number;
}

export interface SceneObject {
  id: string;

  type: ObjectType;

  name: string;

  transform: Transform;

  visible: boolean;

  locked: boolean;
}
