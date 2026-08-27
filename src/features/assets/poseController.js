import { useSceneStore } from '../sceneStore';

export const setCharacterPose = (objectId, pose) => {
  useSceneStore.setState((state) => {
    const object = state.objects[objectId];
    if (!object || object.type !== 'character' || object.locked) return state;
    return { objects: { ...state.objects, [objectId]: { ...object, pose } } };
  });
};

export const getCharacterPose = (objectId) => {
  const object = useSceneStore.getState().objects[objectId];
  return object?.type === 'character' ? object.pose : undefined;
};
