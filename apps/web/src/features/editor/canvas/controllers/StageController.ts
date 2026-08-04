import type {
    KonvaEventObject,
} from "konva/lib/Node";

import type {
    WheelEvent,
} from "react";

import {
    zoomAtPointer,
} from "../engine/zoom";

import {
    useCanvasStore,
} from "../store";

export interface StageController{

    onWheel(
        e:KonvaEventObject<WheelEvent>,
    ):void;

}

export function createStageController()
:StageController{

    return{

        onWheel(e){

            e.evt.preventDefault();

            const stage=
                e.target.getStage();

            if(!stage)return;

            const pointer=
                stage.getPointerPosition();

            if(!pointer)return;

            const store=
                useCanvasStore.getState();

            const result=
                zoomAtPointer(

                    {

                        camera:
                            store.camera,

                        viewport:
                            store.viewport,

                    },

                    pointer,

                    e.evt.deltaY,

                );

            store.setCamera(
                result.camera,
            );

        },

    };

}
