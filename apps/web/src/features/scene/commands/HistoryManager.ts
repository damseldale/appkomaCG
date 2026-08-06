import type {
    SceneCommand,
} from "./SceneCommand";

class HistoryManager {

    private undoStack:
        SceneCommand[] = [];

    private redoStack:
        SceneCommand[] = [];

    execute(
        command: SceneCommand,
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

    clear() {

        this.undoStack = [];

        this.redoStack = [];

    }

    canUndo() {

        return (
            this.undoStack.length >
            0
        );

    }

    canRedo() {

        return (
            this.redoStack.length >
            0
        );

    }

    getUndoCount() {

        return this.undoStack.length;

    }

    getRedoCount() {

        return this.redoStack.length;

    }

}

export const historyManager =
    new HistoryManager();
