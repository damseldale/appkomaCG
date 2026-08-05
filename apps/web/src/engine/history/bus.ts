import type { Command } from "./command";

import { commandManager } from "./manager";

export function dispatch(
    command: Command,
) {
    commandManager.execute(command);
}

export function undo() {
    commandManager.undo();
}

export function redo() {
    commandManager.redo();
}
