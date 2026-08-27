import { useSceneStore } from '../features/scene';
import './LayerPanel.css';

export default function LayerPanel() {
  const rootIds = useSceneStore((state) => state.rootIds);
  const objects = useSceneStore((state) => state.objects);
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const selectObject = useSceneStore((state) => state.selectObject);
  const toggleObjectSelection = useSceneStore((state) => state.toggleObjectSelection);
  const updateTransform = useSceneStore((state) => state.updateTransform);
  const removeObject = useSceneStore((state) => state.removeObject);
  return <aside className="layer-panel"><div className="layer-panel-title">Layers</div>{[...rootIds].reverse().map((id) => { const object = objects[id]; if (!object) return null; return <div key={id} className={`layer-row ${selectedIds.includes(id) ? 'selected' : ''}`}><button className="layer-name" type="button" onClick={() => selectObject(id)}>{object.name || object.type}</button><button type="button" className="layer-icon" onClick={() => updateTransform(id, {})} disabled={object.locked} title={object.locked ? 'Locked' : 'Select'}>{object.locked ? '🔒' : '◉'}</button><button type="button" className="layer-icon" onClick={() => removeObject(id)} title="Delete">×</button></div>; })}</aside>;
}
