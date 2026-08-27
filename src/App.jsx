import CanvasEditor from './components/CanvasEditor';
import Timeline from './components/Timeline';
import Inspector from './components/Inspector';
import Navbar from './components/Navbar';
import AssetLibrary from './components/AssetLibrary';
import EditorToolbar from './components/EditorToolbar';
import ProjectPersistencePanel from './components/ProjectPersistencePanel';
import './App.css';
import './components/EditorToolbar.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <EditorToolbar />
      <div className="workspace">
        <AssetLibrary />
        <CanvasEditor />
        <Inspector />
      </div>
      <Timeline />
      <ProjectPersistencePanel />
    </div>
  );
}

export default App;
