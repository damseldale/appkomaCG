import type { Command } from "./types";

export class HistoryStack {
  private undoStack: Command[] = [];

  private redoStack: Command[] = [];

  execute(command: Command) {
    command.execute();

    this.undoStack.push(command);

    this.redoStack.length = 0;
  }

  undo() {
    const command = this.undoStack.pop();

    if (!command) return;

    command.undo();

    this.redoStack.push(command);
  }

  redo() {
    const command = this.redoStack.pop();

    if (!command) return;

    command.execute();

    this.undoStack.push(command);
  }

  clear() {
    this.undoStack.length = 0;
    this.redoStack.length = 0;
  }

  get canUndo() {
    return this.undoStack.length > 0;
  }

  get canRedo() {
    return this.redoStack.length > 0;
  }
}
