import type { Command } from "./types";

import { commandManager } from "./CommandManager";

export function dispatch(
  command: Command,
) {
  commandManager.dispatch(command);
}

export function undo() {
  commandManager.undo();
}

export function redo() {
  commandManager.redo();
}
