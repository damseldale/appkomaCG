import { useSceneStore } from './sceneStore';

export const getSelectedBounds = () => { const state = useSceneStore.getState(); const selected = state.selectedIds.map((id) => state.objects[id]).filter(Boolean); if (!selected.length) return null; const xs = selected.map((o) => o.transform.x); const ys = selected.map((o) => o.transform.y); const rights = selected.map((o) => o.transform.x + (o.width || 40) * (o.transform.scaleX || 1)); const bottoms = selected.map((o) => o.transform.y + (o.height || 40) * (o.transform.scaleY || 1)); return { left: Math.min(...xs), top: Math.min(...ys), right: Math.max(...rights), bottom: Math.max(...bottoms) }; };

export const moveSelection = (dx, dy) => { const state = useSceneStore.getState(); state.selectedIds.forEach((id) => { const object = state.objects[id]; if (object && !object.locked) state.updateTransform(id, { x: object.transform.x + dx, y: object.transform.y + dy }); }); };
