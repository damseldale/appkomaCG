const registry = new Map();

export const registerAsset = (asset) => {
  registry.set(asset.id, asset);
  return asset;
};

export const unregisterAsset = (id) => registry.delete(id);
export const getAsset = (id) => registry.get(id);
export const getAssets = () => Array.from(registry.values());
export const clearAssets = () => registry.clear();
