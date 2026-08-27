import { useEffect, useRef, useState } from 'react';
import './CanvasEditor.css';
import { createShapeObject, selectRootIds, selectSelectedIds, useSceneStore } from '../features/scene';
import { sceneHistory } from '../features/scene/history/sceneHistory';
import { UpdateTransformCommand, UpdatePropertiesCommand } from '../features/scene/history/commands';
import { useAssetStore } from '../features/assets';

const HANDLE_SIZE = 10;

const drawCharacter = (ctx, object, asset) => {
  const pose = object.pose || asset?.data?.poses?.[0]?.id || 'idle';
  const expression = object.expression || asset?.data?.expressions?.[0]?.id || 'neutral';
  const wave = pose === 'wave';
  const stride = pose === 'walk' || pose === 'run';
  ctx.strokeStyle = '#4b5563'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.fillStyle = '#f2c9a5'; ctx.beginPath(); ctx.arc(0, -50, 18, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#202228'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#202228'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(expression === 'happy' ? '☺' : expression === 'sad' ? '☹' : expression === 'angry' ? '!' : '• •', 0, -47);
  ctx.strokeStyle = '#4b5563'; ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(0, -32); ctx.lineTo(0, 28); ctx.stroke();
  ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-18, -20); if (wave) { ctx.lineTo(-36, -48); ctx.lineTo(-26, -68); } else if (stride) { ctx.lineTo(-38, -2); ctx.lineTo(-28, 18); } else { ctx.lineTo(-13, 8); ctx.lineTo(-18, 32); } ctx.stroke();
  ctx.beginPath(); ctx.moveTo(18, -20); if (stride) { ctx.lineTo(38, -2); ctx.lineTo(28, 18); } else { ctx.lineTo(23, 8); ctx.lineTo(18, 32); } ctx.stroke();
  ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-8, 28); ctx.lineTo(stride ? -24 : -12, 58); ctx.stroke(); ctx.beginPath(); ctx.moveTo(8, 28); ctx.lineTo(stride ? 24 : 12, 58); ctx.stroke();
};

const CanvasEditor = () => {
  const canvasRef = useRef(null); const initializedRef = useRef(false); const [interaction, setInteraction] = useState(null);
  const objects = useSceneStore((state) => state.objects); const rootIds = useSceneStore(selectRootIds); const selectedIds = useSceneStore(selectSelectedIds); const addObject = useSceneStore((state) => state.addObject); const selectObject = useSceneStore((state) => state.selectObject); const clearSelection = useSceneStore((state) => state.clearSelection); const assets = useAssetStore((state) => state.assets);

  useEffect(() => { if (initializedRef.current || rootIds.length > 0) return; initializedRef.current = true; addObject(createShapeObject({ name: 'Demo Shape', transform: { x: 50, y: 50, rotation: 0, scaleX: 1, scaleY: 1 }, width: 50, height: 50 })); }, [addObject, rootIds.length]);

  useEffect(() => { const canvas = canvasRef.current; if (!canvas) return; const ctx = canvas.getContext('2d'); if (!ctx) return; ctx.clearRect(0, 0, canvas.width, canvas.height);
    rootIds.forEach((id) => { const object = objects[id]; if (!object || !object.visible) return; const { x, y, rotation, scaleX, scaleY } = object.transform; ctx.save(); ctx.translate(x, y); ctx.rotate((rotation * Math.PI) / 180); ctx.scale(scaleX, scaleY);
      if (object.type === 'shape') { ctx.fillStyle = object.fill; if (object.shape === 'circle') { ctx.beginPath(); ctx.arc(object.width / 2, object.height / 2, Math.min(object.width, object.height) / 2, 0, Math.PI * 2); ctx.fill(); } else ctx.fillRect(0, 0, object.width, object.height); }
      else if (object.type === 'text') { ctx.fillStyle = object.fill; ctx.font = `${object.fontSize}px ${object.fontFamily}`; ctx.fillText(object.text, 0, object.fontSize); }
      else if (object.type === 'character') drawCharacter(ctx, object, assets[object.characterId]); ctx.restore(); });
    const selected = selectedIds.length === 1 ? objects[selectedIds[0]] : null; if (selected?.type === 'shape' && selected.visible) { const { x, y, rotation, scaleX, scaleY } = selected.transform; ctx.save(); ctx.translate(x, y); ctx.rotate((rotation * Math.PI) / 180); ctx.scale(scaleX, scaleY); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.strokeRect(-2, -2, selected.width + 4, selected.height + 4); ctx.setLineDash([]); ctx.fillStyle = '#fff'; ctx.fillRect(selected.width - HANDLE_SIZE / 2, selected.height - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE); ctx.restore(); }
  }, [objects, rootIds, selectedIds, assets]);

  const getCanvasPoint = (event) => { const rect = canvasRef.current.getBoundingClientRect(); return { x: (event.clientX - rect.left) * (canvasRef.current.width / rect.width), y: (event.clientY - rect.top) * (canvasRef.current.height / rect.height) }; };
  const getSelectedBounds = () => { const selected = selectedIds.length === 1 ? objects[selectedIds[0]] : null; if (!selected || selected.type !== 'shape') return null; return { object: selected, width: selected.width * selected.transform.scaleX, height: selected.height * selected.transform.scaleY }; };
  const handlePointerDown = (event) => { const point = getCanvasPoint(event); const bounds = getSelectedBounds(); if (bounds) { const right = bounds.object.transform.x + bounds.width; const bottom = bounds.object.transform.y + bounds.height; if (Math.abs(point.x - right) <= HANDLE_SIZE && Math.abs(point.y - bottom) <= HANDLE_SIZE) { setInteraction({ type: 'resize', id: bounds.object.id, startX: point.x, startY: point.y, startWidth: bounds.object.width, startHeight: bounds.object.height }); return; } }
    for (let index = rootIds.length - 1; index >= 0; index -= 1) { const id = rootIds[index]; const object = objects[id]; if (!object || !object.visible || object.locked) continue; const { x, y, scaleX, scaleY } = object.transform; const width = object.type === 'shape' ? object.width : object.type === 'character' ? 40 : object.width || 100; const height = object.type === 'shape' ? object.height : object.type === 'character' ? 120 : object.height || 40; if (point.x >= x && point.x <= x + width * scaleX && point.y >= y - (object.type === 'character' ? 70 : 0) && point.y <= y + height * scaleY) { selectObject(id); setInteraction({ type: 'drag', id, offsetX: point.x - x, offsetY: point.y - y, before: { ...object.transform } }); return; } } clearSelection(); };
  const updateObjectDirectly = (id, patch) => useSceneStore.setState((state) => { const object = state.objects[id]; if (!object || object.locked) return state; return { objects: { ...state.objects, [id]: { ...object, ...patch } } }; });
  const handlePointerMove = (event) => { if (!interaction) return; const point = getCanvasPoint(event); const object = objects[interaction.id]; if (!object || object.locked) return; if (interaction.type === 'drag') updateObjectDirectly(object.id, { transform: { ...object.transform, x: point.x - interaction.offsetX, y: point.y - interaction.offsetY } }); else if (object.type === 'shape') updateObjectDirectly(object.id, { width: Math.max(10, interaction.startWidth + (point.x - interaction.startX) / (object.transform.scaleX || 1)), height: Math.max(10, interaction.startHeight + (point.y - interaction.startY) / (object.transform.scaleY || 1)) }); };
  const stopInteraction = () => { if (!interaction) return; const object = objects[interaction.id]; if (object && interaction.type === 'drag') { const after = { ...object.transform }; if (JSON.stringify(interaction.before) !== JSON.stringify(after)) sceneHistory.execute(new UpdateTransformCommand(object.id, after, interaction.before)); } else if (object && interaction.type === 'resize') { const before = { width: interaction.startWidth, height: interaction.startHeight }; const after = { width: object.width, height: object.height }; if (before.width !== after.width || before.height !== after.height) sceneHistory.execute(new UpdatePropertiesCommand(object.id, after, before)); } setInteraction(null); };
  return <div className="canvas-container"><canvas ref={canvasRef} width={800} height={500} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={stopInteraction} onPointerLeave={stopInteraction} /></div>;
};

export default CanvasEditor;
