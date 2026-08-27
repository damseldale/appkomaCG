import { useSceneStore } from '../sceneStore';
import { interpolateKeyframes } from './interpolation';

export const applyTimelineToScene = (keyframes, currentTime) => {
  const objects = useSceneStore.getState().objects;
  Object.entries(keyframes || {}).forEach(([objectId, tracks]) => {
    const object = objects[objectId];
    if (!object || object.locked) return;

    const transform = { ...object.transform };
    let changed = false;
    ['x', 'y', 'rotation', 'scaleX', 'scaleY'].forEach((property) => {
      const value = interpolateKeyframes(tracks[property], currentTime);
      if (value !== undefined) {
        transform[property] = value;
        changed = true;
      }
    });

    if (changed) {
      useSceneStore.setState((state) => ({
        objects: {
          ...state.objects,
          [objectId]: { ...state.objects[objectId], transform },
        },
      }));
    }
  });
};
