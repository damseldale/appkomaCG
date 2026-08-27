import { createCharacterObject } from '../scene/factory';

export const createCharacterFromAsset = (asset, options = {}) => {
  const poses = asset?.data?.poses || [];
  const expressions = asset?.data?.expressions || [];
  const pose = options.pose ?? poses[0]?.id ?? poses[0]?.name;
  const expression = options.expression ?? expressions[0]?.id ?? expressions[0]?.name;

  return createCharacterObject({
    name: options.name || asset.name,
    characterId: asset.id,
    pose,
    expression,
    transform: options.transform || { x: 100, y: 100, rotation: 0, scaleX: 1, scaleY: 1 },
    ...options,
  });
};
