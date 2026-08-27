import { useSceneStore } from '../features/scene';
import { sceneHistory } from '../features/scene/history/sceneHistory';
import { useSceneHistoryShortcuts } from '../features/scene/history/useSceneHistory';
import './EditorToolbar.css';

export default function EditorToolbar() {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const clearSelection = useSceneStore((state) => state.clearSelection);
  useSceneHistoryShortcuts();
  return <div className="editor-toolbar"><button type="button" onClick={() => sceneHistory.undo()} title="Undo (Ctrl/Cmd+Z)">↶</button><button type="button" onClick={() => sceneHistory.redo()} title="Redo (Ctrl/Cmd+Shift+Z)">↷</button><span className="editor-toolbar-divider" /><button type="button" onClick={clearSelection} disabled={selectedIds.length === 0}>Deselect</button><span className="editor-toolbar-selection">{selectedIds.length ? `${selectedIds.length} selected` : 'Nothing selected'}</span></div>;
}
