import type { Command } from "./command";

export class HistoryStack {
    private undoStack: Command[] = [];

    private redoStack: Command[] = [];

    push(command: Command) {
        this.undoStack.push(command);

        this.redoStack = [];
    }

    popUndo() {
        return this.undoStack.pop();
    }

    popRedo() {
        return this.redoStack.pop();
    }

    pushRedo(command: Command) {
        this.redoStack.push(command);
    }

    pushUndo(command: Command) {
        this.undoStack.push(command);
    }
}
