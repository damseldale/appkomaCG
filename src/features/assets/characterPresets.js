export const DEFAULT_CHARACTER_PRESETS = [
  { id: 'preset-basic', name: 'Basic', parts: { head: '#f2c9a5', hair: '#3f2d20', body: '#4b5563', eyes: '#202228', mouth: '#b34b5d' }, pose: 'idle', expression: 'neutral' },
  { id: 'preset-friendly', name: 'Friendly', parts: { head: '#f2c9a5', hair: '#6b4226', body: '#2563eb', eyes: '#202228', mouth: '#b34b5d' }, pose: 'wave', expression: 'happy' },
  { id: 'preset-active', name: 'Active', parts: { head: '#d9a77c', hair: '#1f2937', body: '#16a34a', eyes: '#202228', mouth: '#b34b5d' }, pose: 'run', expression: 'happy' },
];

export const applyCharacterPreset = (objectId, preset, setState) => setState((state) => {
  const object = state.objects[objectId];
  if (!object || object.type !== 'character' || object.locked) return state;
  return { objects: { ...state.objects, [objectId]: { ...object, pose: preset.pose, expression: preset.expression, parts: { ...(object.parts || {}), ...(preset.parts || {}) } } } };
});
