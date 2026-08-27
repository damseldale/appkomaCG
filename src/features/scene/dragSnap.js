import { getAlignmentGuides } from './alignment';

export const getSnappedDrag = (objects, id, nextX, nextY, threshold = 8) => {
  const moving = objects[id];
  if (!moving) return { x: nextX, y: nextY, guideX: null, guideY: null };
  const moved = { ...moving, transform: { ...moving.transform, x: nextX, y: nextY } };
  const guides = getAlignmentGuides({ ...objects, [id]: moved }, id, threshold);
  return { x: nextX + (guides.x || 0), y: nextY + (guides.y || 0), guideX: guides.x !== null ? nextX + guides.x : null, guideY: guides.y !== null ? nextY + guides.y : null };
};
