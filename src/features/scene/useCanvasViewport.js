import { useCallback, useState } from 'react';
import { createViewport, panViewport, zoomAtPoint } from './CanvasViewport';

export function useCanvasViewport() {
  const [viewport, setViewport] = useState(createViewport);
  const zoomAt = useCallback((point, delta) => setViewport((current) => zoomAtPoint(current, point, delta)), []);
  const pan = useCallback((dx, dy) => setViewport((current) => panViewport(current, dx, dy)), []);
  const reset = useCallback(() => setViewport(createViewport()), []);
  return { viewport, zoomAt, pan, reset };
}
