import { create } from 'zustand';

export const useAssetStore = create((set) => ({
  assets: {},
  selectedAssetId: null,

  addAsset: (asset) => set((state) => ({ assets: { ...state.assets, [asset.id]: asset } })),
  removeAsset: (id) => set((state) => {
    const assets = { ...state.assets };
    delete assets[id];
    return { assets, selectedAssetId: state.selectedAssetId === id ? null : state.selectedAssetId };
  }),
  selectAsset: (id) => set({ selectedAssetId: id }),
  clearSelection: () => set({ selectedAssetId: null }),
}));
