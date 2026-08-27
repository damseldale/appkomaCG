import { useEffect } from 'react';
import { sceneHistory } from './sceneHistory';

export function useSceneHistoryShortcuts() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!(event.ctrlKey || event.metaKey)) return;
      if (event.key.toLowerCase() !== 'z') return;

      const target = event.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return;

      event.preventDefault();
      if (event.shiftKey) sceneHistory.redo();
      else sceneHistory.undo();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
