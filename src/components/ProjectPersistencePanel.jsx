import { useEffect, useState } from 'react';
import { loadSceneProject, saveSceneProject } from '../features/scene/projectPersistence';
import { useSceneStore } from '../features/scene';

export default function ProjectPersistencePanel() {
  const objects = useSceneStore((state) => state.objects); const rootIds = useSceneStore((state) => state.rootIds); const [status, setStatus] = useState('');
  useEffect(() => { const project = loadSceneProject(); if (project) useSceneStore.setState((state) => ({ ...state, objects: project.objects, rootIds: project.rootIds, selectedIds: [] })); }, []);
  const save = () => { saveSceneProject({ objects, rootIds }); setStatus('Saved'); setTimeout(() => setStatus(''), 1200); };
  return <div className="project-persistence"><button type="button" onClick={save}>Save Project</button>{status && <span>{status}</span>}</div>;
}
