import { BaseCommand } from "./BaseCommand";

import type { CommandContext } from "../../context";

export class SelectObjectCommand
  extends BaseCommand {

  readonly id =
    crypto.randomUUID();

  readonly type =
    "scene.select";

  constructor(
    private readonly objectId: string,
    private readonly previousSelection: string[],
  ) {
    super();
  }

  execute(
    context: CommandContext,
  ) {
    context.scene.selectObject(
      this.objectId,
    );
  }

  undo(
    context: CommandContext,
  ) {
    context.scene.setSelection(
      this.previousSelection,
    );
  }
}
