import { DEFAULT_CHARACTER_PRESETS, applyCharacterPreset } from '../features/assets/characterPresets';
import { useSceneStore } from '../features/scene';
import './CharacterPresetPanel.css';

export default function CharacterPresetPanel() {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);
  if (selectedIds.length !== 1 || objects[selectedIds[0]]?.type !== 'character') return null;
  return <section className="character-preset-panel"><div className="character-preset-title">Presets</div><div className="character-preset-list">{DEFAULT_CHARACTER_PRESETS.map((preset) => <button key={preset.id} type="button" onClick={() => applyCharacterPreset(selectedIds[0], preset, useSceneStore.setState)}>{preset.name}</button>)}</div></section>;
}
