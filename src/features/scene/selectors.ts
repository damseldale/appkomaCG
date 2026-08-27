import type { SceneState } from './sceneStore';

export const selectSceneObjects = (state: SceneState) => state.objects;
export const selectRootIds = (state: SceneState) => state.rootIds;
export const selectSelectedIds = (state: SceneState) => state.selectedIds;

export const selectSelectedObjects = (state: SceneState) =>
  state.selectedIds
    .map((id) => state.objects[id])
    .filter((object): object is NonNullable<typeof object> => Boolean(object));
