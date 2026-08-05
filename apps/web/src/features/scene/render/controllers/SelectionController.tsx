"use client";

import { useCallback } from "react";

import { useSceneStore } from "../../store";

export function SelectionController() {

    const clearSelection =
        useSceneStore(
            state => state.clearSelection,
        );

    const handleStagePointerDown =
        useCallback(
            (
                e: any,
            ) => {

                const stage =
                    e.target.getStage();

                if (
                    e.target === stage
                ) {
                    clearSelection();
                }

            },
            [
                clearSelection,
            ],
        );

    return {

        handleStagePointerDown,

    };

}
