import { useSceneStore } from "../store";

export function useCommandController() {

    const updateTransform =
        useSceneStore(
            state => state.updateTransform,
        );

    function commitTransform(
        id: string,
        transform: {
            x: number;
            y: number;
            rotation: number;
            scaleX: number;
            scaleY: number;
        },
    ) {

        updateTransform(
            id,
            transform,
        );

    }

    return {

        commitTransform,

    };

}
