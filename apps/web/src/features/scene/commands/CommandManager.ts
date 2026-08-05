import type {
    Command,
} from "./Command";

import {
    historyManager,
} from "./HistoryManager";

class CommandManager {

    execute(
        command: Command,
    ) {

        historyManager.execute(
            command,
        );

    }

    undo() {

        historyManager.undo();

    }

    redo() {

        historyManager.redo();

    }

}

export const commandManager =
    new CommandManager();
