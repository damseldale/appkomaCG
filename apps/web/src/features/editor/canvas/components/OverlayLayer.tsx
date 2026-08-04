"use client";

import type { PropsWithChildren } from "react";
import { Layer } from "react-konva";

interface OverlayLayerProps
  extends PropsWithChildren {}

export function OverlayLayer({
  children,
}: OverlayLayerProps) {
  return (
    <Layer>
      {children}
    </Layer>
  );
}
