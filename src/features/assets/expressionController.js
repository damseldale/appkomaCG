import { useSceneStore } from '../sceneStore';

export const setCharacterExpression = (objectId, expression) => {
  useSceneStore.setState((state) => {
    const object = state.objects[objectId];
    if (!object || object.type !== 'character' || object.locked) return state;
    return { objects: { ...state.objects, [objectId]: { ...object, expression } } };
  });
};

export const getCharacterExpression = (objectId) => {
  const object = useSceneStore.getState().objects[objectId];
  return object?.type === 'character' ? object.expression : undefined;
};
