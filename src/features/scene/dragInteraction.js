import { getSnappedDrag } from './dragSnap';

export const createDragState = (object, pointer) => ({ id: object.id, offsetX: pointer.x - object.transform.x, offsetY: pointer.y - object.transform.y, before: { ...object.transform } });
export const resolveDrag = (state, objects, pointer) => getSnappedDrag(objects, state.id, pointer.x - state.offsetX, pointer.y - state.offsetY);
