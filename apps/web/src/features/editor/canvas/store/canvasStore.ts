"use client";

import { create } from "zustand";

export interface ViewportState {
  width: number;
  height: number;
}

export interface CameraState {
  x: number;
  y: number;
  zoom: number;
}

export interface CanvasState {
  viewport: ViewportState;
  camera: CameraState;
}

interface CanvasActions {
  setViewport(viewport: ViewportState): void;

  setCamera(camera: Partial<CameraState>): void;

  resetCamera(): void;
}

const initialCamera: CameraState = {
  x: 0,
  y: 0,
  zoom: 1,
};

export const useCanvasStore = create<
  CanvasState & CanvasActions
>((set) => ({
  viewport: {
    width: 0,
    height: 0,
  },

  camera: initialCamera,

  setViewport: (viewport) =>
    set({
      viewport,
    }),

  setCamera: (camera) =>
    set((state) => ({
      camera: {
        ...state.camera,
        ...camera,
      },
    })),

  resetCamera: () =>
    set({
      camera: initialCamera,
    }),
}));
