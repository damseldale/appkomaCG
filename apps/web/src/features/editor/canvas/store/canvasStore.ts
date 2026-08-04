"use client";

import { create } from "zustand";

import type {
  CameraState,
  CanvasState,
  ViewportState,
} from "./types";

interface CanvasActions {
  setViewport(
    viewport: ViewportState,
  ): void;

  setCamera(
    camera: Partial<CameraState>,
  ): void;

  resetCamera(): void;
  zoomAt(pointerX: number, pointerY: number, delta: number): void;
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
