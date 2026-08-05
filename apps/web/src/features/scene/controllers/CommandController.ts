import {
    commandManager,
} from "../commands";

import {
    TransformCommand,
} from "../commands";

export function useCommandController() {

    function executeTransform(
        id: string,
        before: SceneTransform,
        after: SceneTransform,
    ) {

        commandManager.execute(

            new TransformCommand(
                id,
                before,
                after,
            ),

        );

    }

    return {

        executeTransform,

    };

}
