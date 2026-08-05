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

export interface BaseObject {
  id: string;
  type: ObjectType;
  name: string;

  transform: Transform;

  visible: boolean;
  locked: boolean;
}

/* ---------- Character ---------- */

export interface CharacterObject
  extends BaseObject {
  type: "character";

  characterId?: string;

  pose?: string;

  expression?: string;
}

/* ---------- Image ---------- */

export interface ImageObject
  extends BaseObject {
  type: "image";

  src: string;

  width: number;

  height: number;
}

/* ---------- Text ---------- */

export interface TextObject
  extends BaseObject {

  type: "text";

  text: string;

  fontSize: number;

  fontFamily: string;

  color: string;
}

/* ---------- Shape ---------- */

export interface ShapeObject
  extends BaseObject {

  type: "shape";

  shape:
    | "rect"
    | "circle"
    | "triangle";

  width: number;

  height: number;

  fill: string;

  stroke: string;

  strokeWidth: number;
}

/* ---------- Group ---------- */

export interface GroupObject
  extends BaseObject {
  type: "group";

  children: string[];
}

export type SceneObject =
  | CharacterObject
  | ImageObject
  | TextObject
  | ShapeObject
  | GroupObject;
