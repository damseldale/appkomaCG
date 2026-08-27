import { useEffect, useRef } from 'react';
import './CanvasEditor.css';
import { createShapeObject, selectRootIds, selectSelectedIds, useSceneStore } from '../features/scene';

const CanvasEditor = () => {
  const canvasRef = useRef(null);
  const initializedRef = useRef(false);
  const objects = useSceneStore((state) => state.objects);
  const rootIds = useSceneStore(selectRootIds);
  const selectedIds = useSceneStore(selectSelectedIds);
  const addObject = useSceneStore((state) => state.addObject);
  const selectObject = useSceneStore((state) => state.selectObject);
  const clearSelection = useSceneStore((state) => state.clearSelection);

  useEffect(() => {
    if (initializedRef.current || rootIds.length > 0) return;
    initializedRef.current = true;
    addObject(
      createShapeObject({
        name: 'Demo Shape',
        transform: { x: 50, y: 50, rotation: 0, scaleX: 1, scaleY: 1 },
        width: 50,
        height: 50,
      }),
    );
  }, [addObject, rootIds.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rootIds.forEach((id) => {
        const object = objects[id];
        if (!object || !object.visible) return;

        const { x, y, rotation, scaleX, scaleY } = object.transform;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(scaleX, scaleY);

        if (object.type === 'shape') {
          ctx.fillStyle = object.fill;
          if (object.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(object.width / 2, object.height / 2, Math.min(object.width, object.height) / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(0, 0, object.width, object.height);
          }
        }

        if (object.type === 'text') {
          ctx.fillStyle = object.fill;
          ctx.font = `${object.fontSize}px ${object.fontFamily}`;
          ctx.fillText(object.text, 0, object.fontSize);
        }

        ctx.restore();
      });

      const selected = selectedIds[0] ? objects[selectedIds[0]] : null;
      if (selected && selected.visible) {
        const { x, y, rotation, scaleX, scaleY } = selected.transform;
        if (selected.type === 'shape') {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.scale(scaleX, scaleY);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]);
          ctx.strokeRect(-2, -2, selected.width + 4, selected.height + 4);
          ctx.restore();
        }
      }
    };

    render();
  }, [objects, rootIds, selectedIds]);

  const getCanvasPoint = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvasRef.current.width / rect.width),
      y: (event.clientY - rect.top) * (canvasRef.current.height / rect.height),
    };
  };

  const handlePointerDown = (event) => {
    const point = getCanvasPoint(event);

    for (let index = rootIds.length - 1; index >= 0; index -= 1) {
      const id = rootIds[index];
      const object = objects[id];
      if (!object || !object.visible || object.locked) continue;
      if (object.type !== 'shape') continue;

      const { x, y, scaleX, scaleY } = object.transform;
      const width = object.width * scaleX;
      const height = object.height * scaleY;
      if (point.x >= x && point.x <= x + width && point.y >= y && point.y <= y + height) {
        selectObject(id);
        return;
      }
    }

    clearSelection();
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        onPointerDown={handlePointerDown}
      />
    </div>
  );
};

export default CanvasEditor;
