import type {
    CameraContext,
    Point,
} from "./types";

import type {
    CameraState,
} from "../store";

import {
    MAX_ZOOM,
    MIN_ZOOM,
} from "../constants";

export interface ZoomResult{
    camera:CameraState;
}

const ZOOM_FACTOR=1.1;

export function zoomAtPointer(

    context:CameraContext,

    pointer:Point,

    deltaY:number,

):ZoomResult{

    const current=context.camera;

    const nextZoom=
        deltaY<0
        ?current.zoom*ZOOM_FACTOR
        :current.zoom/ZOOM_FACTOR;

    const zoom=
        Math.max(
            MIN_ZOOM,
            Math.min(
                MAX_ZOOM,
                nextZoom,
            ),
        );

    const worldX=
        (pointer.x-current.x)/
        current.zoom;

    const worldY=
        (pointer.y-current.y)/
        current.zoom;

    return{

        camera:{

            zoom,

            x:
                pointer.x-
                worldX*zoom,

            y:
                pointer.y-
                worldY*zoom,

        },

    };

}
