import type {
    Command,
} from "./Command";

class HistoryManager {

    private undoStack:
        Command[] = [];

    private redoStack:
        Command[] = [];

    execute(
        command: Command,
    ) {

        command.execute();

        this.undoStack.push(
            command,
        );

        this.redoStack = [];

    }

    undo() {

        const command =
            this.undoStack.pop();

        if (!command) {
            return;
        }

        command.undo();

        this.redoStack.push(
            command,
        );

    }

    redo() {

        const command =
            this.redoStack.pop();

        if (!command) {
            return;
        }

        command.execute();

        this.undoStack.push(
            command,
        );

    }

}

export const historyManager =
    new HistoryManager();
