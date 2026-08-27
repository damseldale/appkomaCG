import './AssetLibrary.css';
import { createCharacterAsset, useAssetStore, createCharacterFromAsset } from '../features/assets';
import { useSceneStore } from '../features/scene';

const AssetLibrary = () => {
  const assets = useAssetStore((state) => state.assets);
  const addAsset = useAssetStore((state) => state.addAsset);
  const selectAsset = useAssetStore((state) => state.selectAsset);
  const addObject = useSceneStore((state) => state.addObject);

  const characters = Object.values(assets).filter((asset) => asset.type === 'character');

  const addDemoCharacter = () => {
    const asset = createCharacterAsset({
      name: 'Character 1',
      poses: [{ id: 'idle', name: 'Idle' }, { id: 'walk', name: 'Walk' }],
      expressions: [{ id: 'neutral', name: 'Neutral' }, { id: 'happy', name: 'Happy' }],
    });
    addAsset(asset);
    selectAsset(asset.id);
    addObject(createCharacterFromAsset(asset));
  };

  const addCharacterToScene = (asset) => {
    selectAsset(asset.id);
    addObject(createCharacterFromAsset(asset));
  };

  return (
    <aside className="asset-library">
      <div className="asset-library-header">
        <h2>Assets</h2>
        <button type="button" onClick={addDemoCharacter}>+ Character</button>
      </div>
      <div className="asset-section">
        <div className="asset-section-title">Characters</div>
        <div className="asset-grid">
          {characters.map((asset) => (
            <button key={asset.id} type="button" className="asset-card" onClick={() => addCharacterToScene(asset)}>
              <div className="asset-thumbnail">{asset.thumbnail ? <img src={asset.thumbnail} alt="" /> : <span>👤</span>}</div>
              <span>{asset.name}</span>
            </button>
          ))}
          {!characters.length && <div className="asset-empty">No characters yet</div>}
        </div>
      </div>
    </aside>
  );
};

export default AssetLibrary;
