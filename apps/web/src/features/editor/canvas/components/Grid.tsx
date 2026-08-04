"use client";

import { Line } from "react-konva";

import { generateGrid } from "../engine/grid";
import { useCanvasStore } from "../store";

const CELL_SIZE = 32;
const MAJOR_EVERY = 5;

export function Grid() {
  const viewport = useCanvasStore(
    (state) => state.viewport,
  );

  const camera = useCanvasStore(
    (state) => state.camera,
  );

  const lines = generateGrid({
    width: viewport.width,
    height: viewport.height,
    cameraX: camera.x,
    cameraY: camera.y,
    zoom: camera.zoom,
    cellSize: CELL_SIZE,
    majorEvery: MAJOR_EVERY,
  });

  return (
    <>
      {lines.map((line, index) => (
        <Line
          key={index}
          points={line.points}
          stroke={
            line.major
              ? "#505050"
              : "#343434"
          }
          strokeWidth={1}
          listening={false}
        />
      ))}
    </>
  );
}
