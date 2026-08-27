import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CanvasEditor.css';
import { createShapeObject, selectRootIds, useSceneStore } from '../features/scene';

const CanvasEditor = () => {
  const canvasRef = useRef(null);
  const initializedRef = useRef(false);
  const objects = useSceneStore((state) => state.objects);
  const rootIds = useSceneStore(selectRootIds);
  const addObject = useSceneStore((state) => state.addObject);

  useEffect(() => {
    if (initializedRef.current || rootIds.length > 0) return;
    initializedRef.current = true;
    addObject(
      createShapeObject({
        name: 'Demo Shape',
        transform: {
          x: 50,
          y: 50,
          rotation: 0,
          scaleX: 1,
          scaleY: 1,
        },
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
            ctx.arc(
              object.width / 2,
              object.height / 2,
              Math.min(object.width, object.height) / 2,
              0,
              Math.PI * 2,
            );
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
    };

    render();

    const animationTargets = rootIds
      .map((id) => objects[id])
      .filter((object) => object?.type === 'shape');

    const tweens = animationTargets.map((object) =>
      gsap.to(object.transform, {
        x: 300,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        onUpdate: render,
      }),
    );

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [objects, rootIds]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={800} height={500} />
    </div>
  );
};

export default CanvasEditor;
