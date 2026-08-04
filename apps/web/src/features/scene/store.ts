export const useSceneStore = create<SceneState>(() => ({
  objects: {},
  rootIds: [],
  selectedIds: [],
}));
