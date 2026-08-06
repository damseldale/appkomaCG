import type {
    Transform,
} from "../../objects";

import {
    useSceneStore,
} from "../../store";

import type {
    SceneCommand,
} from "../CommandManager";

export class TransformCommand
    implements SceneCommand {

    private readonly id: string;

    private readonly before: Transform;

    private readonly after: Transform;

    constructor(
        id: string,
        before: Transform,
        after: Transform,
    ) {

        this.id = id;

        this.before = before;

        this.after = after;

    }

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
