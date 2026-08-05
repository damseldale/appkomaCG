export interface Command {
  readonly id: string;

  readonly type: string;

  execute(): void;

  undo(): void;
}
