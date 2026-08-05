import type { CommandContext } from "../../context";
import type { Command } from "../../types";

export abstract class BaseCommand
  implements Command {

  abstract readonly id: string;

  abstract readonly type: string;

  abstract execute(
    context: CommandContext,
  ): void;

  abstract undo(
    context: CommandContext,
  ): void;
}
