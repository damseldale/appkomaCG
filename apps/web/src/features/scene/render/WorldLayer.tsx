"use client";

import {
    Layer,
} from "react-konva";

import { SceneRenderer } from "./SceneRenderer";

export function WorldLayer() {

    return (
        <Layer>
            <SceneRenderer />
        </Layer>
    );

}
