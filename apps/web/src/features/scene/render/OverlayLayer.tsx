"use client";

import {
    Layer,
} from "react-konva";

import {
    TransformerController,
} from "../controllers/TransformerController";

export function OverlayLayer() {

    return (
        <Layer
            listening={false}
        >
            <TransformerController />
        </Layer>
    );

}
