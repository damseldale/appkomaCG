import type {
    SceneTransform,
} from "@/features/objects";

import { useSceneStore } from "../store";

import type {
    Command,
} from "./Command";

export class TransformCommand
    implements Command {

    constructor(

        private readonly id: string,

        private readonly before: SceneTransform,

        private readonly after: SceneTransform,

    ) {}

    execute() {

        useSceneStore
            .getState()
            .updateTransform(
                this.id,
                this.after,
            );

    }

    undo() {

        useSceneStore
            .getState()
            .updateTransform(
                this.id,
                this.before,
            );

    }

}
