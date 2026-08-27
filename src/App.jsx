import { useEffect } from 'react';
import CanvasEditor from './components/CanvasEditor';
import Timeline from './components/Timeline';
import Inspector from './components/Inspector';
import Navbar from './components/Navbar';
import AssetLibrary from './components/AssetLibrary';
import './App.css';
import { useSceneHistoryShortcuts } from './features/scene/history/useSceneHistory';

function App() {
  useSceneHistoryShortcuts();

  useEffect(() => () => {}, []);

  return (
    <div className="app-layout">
      <Navbar />
      <div className="workspace">
        <AssetLibrary />
        <CanvasEditor />
        <Inspector />
      </div>
      <Timeline />
    </div>
  );
}

export default App;
