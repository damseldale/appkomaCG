import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CanvasEditor.css';

const CanvasEditor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Objek contoh untuk dianimasikan
    const shape = { x: 50, y: 50, size: 50, color: '#3b82f6' };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = shape.color;
      ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
    };

    // Animasi Tweening dengan GSAP
    gsap.to(shape, {
      x: 300,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      onUpdate: render
    });

    render();
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={800} height={500} />
    </div>
  );
};

export default CanvasEditor;
