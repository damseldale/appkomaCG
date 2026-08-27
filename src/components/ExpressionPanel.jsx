import { useMemo } from 'react';
import './ExpressionPanel.css';
import { setCharacterExpression, useAssetStore } from '../features/assets';
import { useSceneStore } from '../features/scene';

const ExpressionPanel = () => {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);
  const assets = useAssetStore((state) => state.assets);
  const character = selectedIds.length === 1 ? objects[selectedIds[0]] : null;
  const asset = character?.type === 'character' ? assets[character.characterId] : null;
  const expressions = useMemo(() => asset?.data?.expressions || [], [asset]);

  if (!character || character.type !== 'character') return null;

  return (
    <section className="expression-panel">
      <div className="expression-panel-title">Expression</div>
      <div className="expression-list">
        {expressions.length ? expressions.map((expression) => {
          const value = expression.id ?? expression.name;
          return <button key={value} type="button" className={character.expression === value ? 'active' : ''} onClick={() => setCharacterExpression(character.id, value)}>{expression.name || expression.id}</button>;
        }) : <span className="expression-empty">No expressions available</span>}
      </div>
    </section>
  );
};

export default ExpressionPanel;
