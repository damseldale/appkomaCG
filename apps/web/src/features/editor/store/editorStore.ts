"use client";

import { create } from "zustand";

import type { EditorState } from "../types/editor";

interface EditorActions {
  setCamera(
    x: number,
    y: number,
    zoom: number,
  ): void;

  setSelected(
    id: string | null,
  ): void;

  setPlaying(
    value: boolean,
  ): void;

  setCurrentFrame(
    frame: number,
  ): void;
}

export const useEditorStore = create<
  EditorState &
  EditorActions
>((set) => ({
  camera: {
    x: 0,
    y: 0,
    zoom: 1,
  },

  selectedId: null,

  playing: false,

  currentFrame: 0,

  setCamera: (
    x,
    y,
    zoom,
  ) =>
    set({
      camera: {
        x,
        y,
        zoom,
      },
    }),

  setSelected: (
    id,
  ) =>
    set({
      selectedId: id,
    }),

  setPlaying: (
    value,
  ) =>
    set({
      playing: value,
    }),

  setCurrentFrame: (
    frame,
  ) =>
    set({
      currentFrame: frame,
    }),
}));
