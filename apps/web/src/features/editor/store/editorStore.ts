"use client";

import { create } from "zustand";

import type {
  EditorState,
  EditorTool,
} from "./types";

interface EditorActions {
  setTool(tool: EditorTool): void;

  setCamera(
    camera: Partial<EditorState["camera"]>,
  ): void;

  setSelected(
    id: string | null,
  ): void;

  setPlaying(
    playing: boolean,
  ): void;

  setCurrentFrame(
    frame: number,
  ): void;

  toggleGrid(): void;

  toggleSnap(): void;
}

const initialState: EditorState = {
  camera: {
    x: 0,
    y: 0,
    zoom: 1,
  },

  tool: "select",

  selectedId: null,

  playing: false,

  currentFrame: 0,

  snap: true,

  showGrid: true,
};

export const useEditorStore = create<
  EditorState & EditorActions
>((set) => ({
  ...initialState,

  setTool: (tool) =>
    set({
      tool,
    }),

  setCamera: (camera) =>
    set((state) => ({
      camera: {
        ...state.camera,
        ...camera,
      },
    })),

  setSelected: (id) =>
    set({
      selectedId: id,
    }),

  setPlaying: (playing) =>
    set({
      playing,
    }),

  setCurrentFrame: (frame) =>
    set({
      currentFrame: frame,
    }),

  toggleGrid: () =>
    set((state) => ({
      showGrid: !state.showGrid,
    })),

  toggleSnap: () =>
    set((state) => ({
      snap: !state.snap,
    })),
}));
