import './CharacterPartsPanel.css';
import { setCharacterPart } from '../features/assets/characterCustomization';
import { useSceneStore } from '../features/scene';

const PARTS = [
  ['hair', 'Hair'], ['eyes', 'Eyes'], ['mouth', 'Mouth'], ['body', 'Body'],
  ['leftArm', 'Left Arm'], ['rightArm', 'Right Arm'], ['leftLeg', 'Left Leg'], ['rightLeg', 'Right Leg'],
];

export default function CharacterPartsPanel() {
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);
  const character = selectedIds.length === 1 ? objects[selectedIds[0]] : null;
  if (!character || character.type !== 'character') return null;

  return <section className="character-parts-panel">
    <div className="character-parts-title">Body Parts</div>
    <div className="character-parts-grid">
      {PARTS.map(([key, label]) => (
        <label key={key}>
          <span>{label}</span>
          <input value={character.parts?.[key] || ''} placeholder="default" onChange={(event) => setCharacterPart(character.id, key, event.target.value || undefined)} />
        </label>
      ))}
    </div>
  </section>;
}
