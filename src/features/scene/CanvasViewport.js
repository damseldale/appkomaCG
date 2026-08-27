const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const createViewport = () => ({ x: 0, y: 0, zoom: 1 });
export const zoomAtPoint = (viewport, point, delta, min = 0.25, max = 4) => {
  const nextZoom = clamp(viewport.zoom * (delta > 0 ? 1.1 : 0.9), min, max);
  const scale = nextZoom / viewport.zoom;
  return { zoom: nextZoom, x: point.x - (point.x - viewport.x) * scale, y: point.y - (point.y - viewport.y) * scale };
};
export const panViewport = (viewport, dx, dy) => ({ ...viewport, x: viewport.x + dx, y: viewport.y + dy });
export const screenToWorld = (point, viewport) => ({ x: (point.x - viewport.x) / viewport.zoom, y: (point.y - viewport.y) / viewport.zoom });
