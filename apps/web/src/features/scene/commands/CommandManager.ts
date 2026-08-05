import type {
    Command,
} from "./Command";

class CommandManager {

    execute(
        command: Command,
    ) {

        command.execute();

    }

}

export const commandManager =
    new CommandManager();
