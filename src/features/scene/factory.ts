import type { CharacterObject, SceneObject, ShapeObject, Transform } from './types';

const defaultTransform: Transform = {
  x: 50,
  y: 50,
  rotation: 0,
  scaleX: 1,
  scaleY: 1,
};

export function createShapeObject(
  overrides: Partial<Omit<ShapeObject, 'id' | 'type'>> = {},
): ShapeObject {
  return {
    id: crypto.randomUUID(),
    type: 'shape',
    name: 'Rectangle',
    transform: { ...defaultTransform },
    visible: true,
    locked: false,
    shape: 'rect',
    width: 100,
    height: 100,
    fill: '#3b82f6',
    ...overrides,
  };
}

export function createCharacterObject(
  overrides: Partial<Omit<CharacterObject, 'id' | 'type'>> = {},
): CharacterObject {
  return {
    id: crypto.randomUUID(),
    type: 'character',
    name: 'Character',
    transform: { ...defaultTransform },
    visible: true,
    locked: false,
    ...overrides,
  };
}

export function createDefaultScene(): Record<string, SceneObject> {
  const shape = createShapeObject();
  return { [shape.id]: shape };
}
