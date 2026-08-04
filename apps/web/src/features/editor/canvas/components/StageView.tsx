"use client";

import { Stage } from "react-konva";

import { World } from "./World";

import { useCanvasStore } from "../store";

export function StageView() {
  const viewport = useCanvasStore(
    (state) => state.viewport,
  );

  return (
    <Stage
      onWheel={(event) => {
  event.evt.preventDefault();

  // batch pertama:
  // baca posisi pointer
  // panggil zoomAt()
}}
      width={viewport.width}
      height={viewport.height}
      
    >
      <World />
    </Stage>
  );
}
