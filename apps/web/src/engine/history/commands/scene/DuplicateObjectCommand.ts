import type {
  SceneObject,
} from "@/features/objects";

import { BaseCommand } from "./BaseCommand";

import type { CommandContext } from "../../context";

export class DuplicateObjectCommand
  extends BaseCommand {

  readonly id =
    crypto.randomUUID();

  readonly type =
    "scene.duplicate";

  private duplicateId =
    "";

  constructor(
    private readonly object: SceneObject,
  ) {
    super();
  }

  execute(
    context: CommandContext,
  ) {
    this.duplicateId =
      context.scene.duplicateObject(
        this.object.id,
      );
  }

  undo(
    context: CommandContext,
  ) {
    context.scene.removeObject(
      this.duplicateId,
    );
  }
}
