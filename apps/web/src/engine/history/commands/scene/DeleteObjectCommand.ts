import type {
  SceneObject,
} from "@/features/objects";

import { BaseCommand } from "./BaseCommand";

import type { CommandContext } from "../../context";

export class DeleteObjectCommand
  extends BaseCommand {

  readonly id =
    crypto.randomUUID();

  readonly type =
    "scene.delete";

  constructor(
    private readonly object: SceneObject,
  ) {
    super();
  }

  execute(
    context: CommandContext,
  ) {
    context.scene.removeObject(
      this.object.id,
    );
  }

  undo(
    context: CommandContext,
  ) {
    context.scene.addObject(
      this.object,
    );
  }
}
