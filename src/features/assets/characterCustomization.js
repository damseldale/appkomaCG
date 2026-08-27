import { useSceneStore } from '../scene/sceneStore';

const updateCharacter = (objectId, patch) => {
  useSceneStore.setState((state) => {
    const object = state.objects[objectId];
    if (!object || object.type !== 'character' || object.locked) return state;
    return { objects: { ...state.objects, [objectId]: { ...object, ...patch } } };
  });
};

export const setCharacterPose = (objectId, pose) => updateCharacter(objectId, { pose });
export const setCharacterExpression = (objectId, expression) => updateCharacter(objectId, { expression });
export const setCharacterPart = (objectId, part, value) => updateCharacter(objectId, {
  data: { ...(useSceneStore.getState().objects[objectId]?.data || {}), parts: { ...(useSceneStore.getState().objects[objectId]?.data?.parts || {}), [part]: value } },
});
