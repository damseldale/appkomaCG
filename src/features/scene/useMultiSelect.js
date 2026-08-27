import { useSceneStore } from './sceneStore';

export const selectRange = (ids) => {
  const valid = ids.filter((id) => useSceneStore.getState().objects[id]);
  useSceneStore.setState({ selectedIds: valid });
};

export const toggleSelection = (id) => {
  const state = useSceneStore.getState();
  if (!state.objects[id]) return;
  state.toggleObjectSelection(id);
};

export const moveSelected = (dx, dy) => {
  const state = useSceneStore.getState();
  state.selectedIds.forEach((id) => {
    const object = state.objects[id];
    if (object && !object.locked) state.updateTransform(id, { x: object.transform.x + dx, y: object.transform.y + dy });
  });
};
