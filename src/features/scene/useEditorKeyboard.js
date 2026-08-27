import { useEffect } from 'react';
import { useSceneStore } from './sceneStore';

export function useEditorKeyboard() {
  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable) return;
      const { selectedIds, objects, updateTransform, clearSelection, removeObject } = useSceneStore.getState();
      if (event.key === 'Escape') { clearSelection(); return; }
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedIds.length) {
        event.preventDefault(); selectedIds.forEach((id) => removeObject(id)); return;
      }
      const step = event.shiftKey ? 10 : 1;
      const deltas = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
      const delta = deltas[event.key];
      if (!delta || !selectedIds.length) return;
      event.preventDefault();
      selectedIds.forEach((id) => { const object = objects[id]; if (object && !object.locked) updateTransform(id, { x: object.transform.x + delta[0], y: object.transform.y + delta[1] }); });
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
}
