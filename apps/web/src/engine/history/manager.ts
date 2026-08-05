import type { Command } from "./command";

import { HistoryStack } from "./history";

export class CommandManager {
    private history =
        new HistoryStack();

    execute(command: Command) {
        command.execute();

        this.history.push(command);
    }

    undo() {
        const command =
            this.history.popUndo();

        if (!command) {
            return;
        }

        command.undo();

        this.history.pushRedo(command);
    }

    redo() {
        const command =
            this.history.popRedo();

        if (!command) {
            return;
        }

        command.execute();

        this.history.pushUndo(command);
    }
}

export const commandManager =
    new CommandManager();
