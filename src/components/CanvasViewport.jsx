import { useRef, useState } from 'react';
import CanvasEditor from './CanvasEditor';
import { useCanvasViewport } from '../features/scene/useCanvasViewport';
import './CanvasViewport.css';

export default function CanvasViewport() {
  const { viewport, zoomAt, pan, reset } = useCanvasViewport();
  const [dragging, setDragging] = useState(false);
  const last = useRef(null);
  const onWheel = (event) => { event.preventDefault(); const rect = event.currentTarget.getBoundingClientRect(); zoomAt({ x: event.clientX - rect.left, y: event.clientY - rect.top }, event.deltaY < 0 ? 1 : -1); };
  const onPointerDown = (event) => { if (event.button !== 1 && !(event.button === 0 && event.altKey)) return; event.currentTarget.setPointerCapture(event.pointerId); last.current = { x: event.clientX, y: event.clientY }; setDragging(true); };
  const onPointerMove = (event) => { if (!dragging || !last.current) return; pan(event.clientX - last.current.x, event.clientY - last.current.y); last.current = { x: event.clientX, y: event.clientY }; };
  const stop = () => { setDragging(false); last.current = null; };
  return <div className={`canvas-viewport ${dragging ? 'dragging' : ''}`} onWheel={onWheel} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={stop} onPointerCancel={stop}><div className="canvas-viewport-stage" style={{ transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})` }}><CanvasEditor /></div><div className="canvas-viewport-controls"><button type="button" onClick={() => zoomAt({ x: 400, y: 250 }, 1)}>+</button><span>{Math.round(viewport.zoom * 100)}%</span><button type="button" onClick={() => zoomAt({ x: 400, y: 250 }, -1)}>−</button><button type="button" onClick={reset}>Reset</button></div></div>;
}
