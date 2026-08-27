import { CommandManager } from './CommandManager';

export const sceneHistory = new CommandManager();

export const undoScene = () => sceneHistory.undo();
export const redoScene = () => sceneHistory.redo();
