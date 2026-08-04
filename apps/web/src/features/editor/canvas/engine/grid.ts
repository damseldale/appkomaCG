export interface GridLine {
  points: number[];
  major: boolean;
}

export interface GridOptions {
  width: number;
  height: number;

  cameraX: number;
  cameraY: number;

  zoom: number;

  cellSize: number;
  majorEvery: number;
}

export function generateGrid(
  options: GridOptions,
) {
  const {
    width,
    height,
    cameraX,
    cameraY,
    zoom,
    cellSize,
    majorEvery,
  } = options;

  const lines: GridLine[] = [];

  const visibleCell =
    cellSize * zoom;

  const startX =
    Math.floor(
      (-cameraX * zoom) /
        visibleCell,
    ) - 1;

  const endX =
    Math.ceil(
      (width -
        cameraX * zoom) /
        visibleCell,
    ) + 1;

  const startY =
    Math.floor(
      (-cameraY * zoom) /
        visibleCell,
    ) - 1;

  const endY =
    Math.ceil(
      (height -
        cameraY * zoom) /
        visibleCell,
    ) + 1;

  for (
    let x = startX;
    x <= endX;
    x++
  ) {
    const px =
      x * visibleCell +
      cameraX * zoom;

    lines.push({
      points: [
        px,
        0,
        px,
        height,
      ],
      major:
        x % majorEvery === 0,
    });
  }

  for (
    let y = startY;
    y <= endY;
    y++
  ) {
    const py =
      y * visibleCell +
      cameraY * zoom;

    lines.push({
      points: [
        0,
        py,
        width,
        py,
      ],
      major:
        y % majorEvery === 0,
    });
  }

  return lines;
}
