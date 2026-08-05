"use client";

import {
    Stage,
} from "react-konva";

import { WorldLayer } from "./WorldLayer";
import { OverlayLayer } from "./OverlayLayer";

import { useKeyboardController } from "../controllers/KeyboardController";
import { useSelectionController } from "../controllers/SelectionController";

interface Props {
    width: number;
    height: number;
}

export function SceneStage({
    width,
    height,
}: Props) {

    const selection =
        useSelectionController();

    useKeyboardController();

    return (
        <Stage
            width={width}
            height={height}
            onPointerDown={
                selection.handleStagePointerDown
            }
        >
            <WorldLayer />

            <OverlayLayer />
        </Stage>
    );

}
