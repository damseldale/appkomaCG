import { create } from 'zustand';
import type { ObjectId, SceneObject, Transform } from './types';

export interface SceneState {
  objects: Record<ObjectId, SceneObject>;
  rootIds: ObjectId[];
  selectedIds: ObjectId[];
  addObject: (object: SceneObject) => void;
  removeObject: (id: ObjectId) => void;
  updateTransform: (id: ObjectId, transform: Partial<Transform>) => void;
  selectObject: (id: ObjectId) => void;
  toggleObjectSelection: (id: ObjectId) => void;
  clearSelection: () => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  objects: {},
  rootIds: [],
  selectedIds: [],

  addObject: (object) =>
    set((state) => ({
      objects: { ...state.objects, [object.id]: object },
      rootIds: state.rootIds.includes(object.id)
        ? state.rootIds
        : [...state.rootIds, object.id],
    })),

  removeObject: (id) =>
    set((state) => {
      const { [id]: _removed, ...objects } = state.objects;
      return {
        objects,
        rootIds: state.rootIds.filter((rootId) => rootId !== id),
        selectedIds: state.selectedIds.filter((selectedId) => selectedId !== id),
      };
    }),

  updateTransform: (id, transform) =>
    set((state) => {
      const object = state.objects[id];
      if (!object || object.locked) return state;

      return {
        objects: {
          ...state.objects,
          [id]: {
            ...object,
            transform: { ...object.transform, ...transform },
          },
        },
      };
    }),

  selectObject: (id) =>
    set((state) => ({
      selectedIds: state.objects[id] ? [id] : state.selectedIds,
    })),

  toggleObjectSelection: (id) =>
    set((state) => {
      if (!state.objects[id]) return state;
      const selected = state.selectedIds.includes(id);
      return {
        selectedIds: selected
          ? state.selectedIds.filter((selectedId) => selectedId !== id)
          : [...state.selectedIds, id],
      };
    }),

  clearSelection: () => set({ selectedIds: [] }),
}));
