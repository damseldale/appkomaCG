import { useMemo } from 'react';
import { createCharacterVariant } from '../features/assets/characterVariants';
import { useAssetStore } from '../features/assets';
import { useSceneStore } from '../features/scene';
import './CharacterVariantPanel.css';

export default function CharacterVariantPanel() {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);
  const assets = useAssetStore((state) => state.assets);
  const addObject = useSceneStore((state) => state.addObject);
  const character = selectedIds.length === 1 ? objects[selectedIds[0]] : null;
  const base = character?.type === 'character' ? assets[character.characterId] : null;
  const variants = useMemo(() => Object.values(assets).filter((asset) => asset.type === 'character' && asset.baseAssetId === base?.id), [assets, base?.id]);
  if (!character || character.type !== 'character' || !base) return null;
  const createVariant = () => createCharacterVariant(base.id, { name: `${base.name} Variant ${variants.length + 1}` });
  const useVariant = (variant) => {
    addObject({ ...character, id: crypto.randomUUID(), name: variant.name, characterId: variant.id, parts: { ...(character.parts || {}), ...(variant.data?.parts || {}) } });
  };
  return <section className="character-variant-panel"><div className="character-variant-title">Variants</div><button type="button" onClick={createVariant}>+ Create Variant</button><div className="character-variant-list">{variants.map((variant) => <button key={variant.id} type="button" onClick={() => useVariant(variant)}>{variant.name}</button>)}{variants.length === 0 && <span>No variants yet</span>}</div></section>;
}
