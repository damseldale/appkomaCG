export type ObjectType = 'shape' | 'text' | 'image' | 'character' | 'group';

export interface Transform { x: number; y: number; rotation: number; scaleX: number; scaleY: number; }
export interface CharacterParts { head?: string; hair?: string; eyes?: string; mouth?: string; body?: string; leftArm?: string; rightArm?: string; leftLeg?: string; rightLeg?: string; }
export interface BaseObject { id: string; type: ObjectType; name: string; transform: Transform; visible: boolean; locked: boolean; }
export interface ShapeObject extends BaseObject { type: 'shape'; shape: 'rect' | 'circle'; width: number; height: number; fill: string; }
export interface TextObject extends BaseObject { type: 'text'; text: string; fontSize: number; fontFamily: string; fill: string; }
export interface ImageObject extends BaseObject { type: 'image'; src: string; width: number; height: number; }
export interface CharacterObject extends BaseObject { type: 'character'; characterId?: string; pose?: string; expression?: string; parts?: CharacterParts; }
export interface GroupObject extends BaseObject { type: 'group'; childIds: string[]; }
export type SceneObject = ShapeObject | TextObject | ImageObject | CharacterObject | GroupObject;
export type ObjectId = string;
