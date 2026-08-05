import type { CommandContext } from "./context";

export interface Command {
  readonly id: string;

  readonly type: string;

  execute(
    context: CommandContext,
  ): void;

  undo(
    context: CommandContext,
  ): void;
}
