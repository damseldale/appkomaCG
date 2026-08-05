import type { Command } from "./types";
import { HistoryStack } from "./HistoryStack";

export class CommandManager {
  private readonly history =
    new HistoryStack();

  dispatch(command: Command) {
    this.history.execute(command);
  }

  undo() {
    this.history.undo();
  }

  redo() {
    this.history.redo();
  }

  clear() {
    this.history.clear();
  }

  get canUndo() {
    return this.history.canUndo;
  }

  get canRedo() {
    return this.history.canRedo;
  }
}

export const commandManager =
  new CommandManager();
