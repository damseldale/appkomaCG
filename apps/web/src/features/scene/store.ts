"use client";

import { create } from "zustand";

import type { SceneObject } from "../objects";
import type { ObjectId, SceneState } from "./types";

export interface SceneActions {
  addObject(object: SceneObject): void;

  removeObject(id: ObjectId): void;

  updateObject(
    id: ObjectId,
    patch: Partial<SceneObject>,
  ): void;

  selectObject(id: ObjectId): void;

  clearSelection(): void;
}

export const useSceneStore = create<
  SceneState & SceneActions
>((set) => ({
  objects: {},

  rootIds: [],

  selectedIds: [],

  addObject(object) {
    set((state) => ({
      objects: {
        ...state.objects,
        [object.id]: object,
      },

      rootIds: [...state.rootIds, object.id],
    }));
  },

  removeObject(id) {
    set((state) => {
      const objects = { ...state.objects };

      delete objects[id];

      return {
        objects,

        rootIds: state.rootIds.filter(
          (value) => value !== id,
        ),

        selectedIds:
          state.selectedIds.filter(
            (value) => value !== id,
          ),
      };
    });
  },

  updateObject(id, patch) {
    set((state) => {
      const object = state.objects[id];

      if (!object) {
        return state;
      }

      return {
        objects: {
          ...state.objects,
          [id]: {
            ...object,
            ...patch,
          },
        },
      };
    });
  },

  selectObject(id) {
    set({
      selectedIds: [id],
    });
  },

  clearSelection() {
    set({
      selectedIds: [],
    });
  },
}));
