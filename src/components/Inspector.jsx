import { useMemo } from 'react';
import './Inspector.css';
import { selectSelectedIds, useSceneStore } from '../features/scene';
import { useAssetStore, setCharacterPose } from '../features/assets';
import PosePanel from './PosePanel';

const Inspector = () => {
  const selectedIds = useSceneStore(selectSelectedIds);
  const objects = useSceneStore((state) => state.objects);
  const updateTransform = useSceneStore((state) => state.updateTransform);
  const assets = useAssetStore((state) => state.assets);
  const selectedObject = useMemo(() => selectedIds.length === 1 ? objects[selectedIds[0]] ?? null : null, [objects, selectedIds]);

  if (!selectedObject) return <aside className="inspector"><h3>Inspector</h3><p className="inspector-empty">Pilih satu object untuk mengedit properti.</p></aside>;

  const { transform } = selectedObject;
  const size = selectedObject.type === 'shape' || selectedObject.type === 'image' ? selectedObject.width : undefined;
  const updateSize = (value) => {
    if (!Number.isFinite(value) || value < 1) return;
    useSceneStore.setState((state) => ({ objects: { ...state.objects, [selectedObject.id]: selectedObject.type === 'shape' ? { ...selectedObject, width: value, height: value } : { ...selectedObject, width: value, height: value * (selectedObject.height / selectedObject.width || 1) } } }));
  };
  const updateColor = (value) => {
    if (selectedObject.type !== 'shape' && selectedObject.type !== 'text') return;
    useSceneStore.setState((state) => ({ objects: { ...state.objects, [selectedObject.id]: { ...selectedObject, fill: value } } }));
  };

  const characterAsset = selectedObject.type === 'character' ? assets[selectedObject.characterId] : null;

  return (
    <aside className="inspector">
      <h3>Inspector</h3>
      <div className="property-group"><label htmlFor="object-x">Posisi X</label><input id="object-x" type="number" value={transform.x} onChange={(event) => updateTransform(selectedObject.id, { x: Number(event.target.value) })} /></div>
      <div className="property-group"><label htmlFor="object-y">Posisi Y</label><input id="object-y" type="number" value={transform.y} onChange={(event) => updateTransform(selectedObject.id, { y: Number(event.target.value) })} /></div>
      {size !== undefined && <div className="property-group"><label htmlFor="object-size">Ukuran</label><input id="object-size" type="number" min="1" value={size} onChange={(event) => updateSize(Number(event.target.value))} /></div>}
      {(selectedObject.type === 'shape' || selectedObject.type === 'text') && <div className="property-group"><label htmlFor="object-color">Warna</label><input id="object-color" type="color" value={selectedObject.fill} onChange={(event) => updateColor(event.target.value)} /></div>}
      {selectedObject.type === 'character' && characterAsset && <PosePanel />}
    </aside>
  );
};

export default Inspector;
