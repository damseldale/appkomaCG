export const TRACK_PROPERTIES = ['x', 'y', 'rotation', 'scaleX', 'scaleY'];

export const createKeyframe = (time, value) => ({
  id: crypto.randomUUID(),
  time,
  value,
});
