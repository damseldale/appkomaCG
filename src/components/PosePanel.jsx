import { useMemo } from 'react';
import './PosePanel.css';
import { setCharacterPose, useAssetStore } from '../features/assets';
import { useSceneStore } from '../features/scene';

const PosePanel = () => {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);
  const assets = useAssetStore((state) => state.assets);
  const character = selectedIds.length === 1 ? objects[selectedIds[0]] : null;
  const asset = character?.type === 'character' ? assets[character.characterId] : null;
  const poses = useMemo(() => asset?.data?.poses || [], [asset]);

  if (!character || character.type !== 'character') return null;

  return (
    <section className="pose-panel">
      <div className="pose-panel-title">Pose</div>
      <div className="pose-list">
        {poses.length ? poses.map((pose) => {
          const value = pose.id ?? pose.name;
          return <button key={value} type="button" className={character.pose === value ? 'active' : ''} onClick={() => setCharacterPose(character.id, value)}>{pose.name || pose.id}</button>;
        }) : <span className="pose-empty">No poses available</span>}
      </div>
    </section>
  );
};

export default PosePanel;
