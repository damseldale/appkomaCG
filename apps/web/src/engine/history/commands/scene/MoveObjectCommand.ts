import { BaseCommand } from "./BaseCommand";

import type { CommandContext } from "../../context";

export class MoveObjectCommand
  extends BaseCommand {

  readonly id =
    crypto.randomUUID();

  readonly type =
    "scene.move";

  constructor(
    private readonly objectId: string,

    private readonly from: {
      x: number;
      y: number;
    },

    private readonly to: {
      x: number;
      y: number;
    },
  ) {
    super();
  }

  execute(
    context: CommandContext,
  ) {
    context.scene.moveObject(
      this.objectId,
      this.to.x,
      this.to.y,
    );
  }

  undo(
    context: CommandContext,
  ) {
    context.scene.moveObject(
      this.objectId,
      this.from.x,
      this.from.y,
    );
  }
}
