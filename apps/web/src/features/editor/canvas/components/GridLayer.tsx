"use client";

import { Layer } from "react-konva";

import { Grid } from "./Grid";

export function GridLayer() {
  return (
    <Layer listening={false}>
      <Grid />
    </Layer>
  );
}
