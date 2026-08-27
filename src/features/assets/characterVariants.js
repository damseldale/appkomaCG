import { useAssetStore } from './assetStore';

export const createCharacterVariant = (assetId, overrides = {}) => {
  const asset = useAssetStore.getState().assets[assetId];
  if (!asset || asset.type !== 'character') throw new Error('Character asset not found');
  const id = `${assetId}-variant-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const variant = { ...asset, id, name: overrides.name || `${asset.name} Variant`, baseAssetId: assetId, data: { ...(asset.data || {}), ...(overrides.data || {}) } };
  useAssetStore.getState().addAsset(variant);
  return variant;
};

export const duplicateCharacterVariant = (assetId) => createCharacterVariant(assetId);
export const deleteCharacterVariant = (assetId) => useAssetStore.getState().removeAsset(assetId);
