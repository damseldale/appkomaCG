export class CommandManager {
  constructor(limit = 100) { this.undoStack = []; this.redoStack = []; this.limit = limit; }
  execute(command) { if (!command || typeof command.execute !== 'function') return false; command.execute(); this.undoStack.push(command); if (this.undoStack.length > this.limit) this.undoStack.shift(); this.redoStack = []; return true; }
  undo() { const command = this.undoStack.pop(); if (!command) return false; command.undo(); this.redoStack.push(command); return true; }
  redo() { const command = this.redoStack.pop(); if (!command) return false; if (typeof command.redo === 'function') command.redo(); else command.execute(); this.undoStack.push(command); return true; }
  clear() { this.undoStack = []; this.redoStack = []; }
  canUndo() { return this.undoStack.length > 0; }
  canRedo() { return this.redoStack.length > 0; }
}
