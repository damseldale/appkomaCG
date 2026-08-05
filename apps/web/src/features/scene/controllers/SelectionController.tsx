"use client";

import { useCallback } from "react";

import { useSceneStore } from "../../store";

export function SelectionController() {
    const selectObject = useSceneStore(
        state => state.selectObject,
    );

    const toggleObjectSelection = useSceneStore(
        state => state.toggleObjectSelection,
    );

    const clearSelection = useSceneStore(
        state => state.clearSelection,
    );

    const handleObjectPointerDown = useCallback(
        (
            e: any,
            id: string,
        ) => {
            e.cancelBubble = true;

            const nativeEvent =
                e.evt as MouseEvent;

            const multiSelect =
                nativeEvent.ctrlKey ||
                nativeEvent.metaKey;

            if (multiSelect) {
                toggleObjectSelection(id);
                return;
            }

            selectObject(id);
        },
        [
            selectObject,
            toggleObjectSelection,
        ],
    );

    const handleStagePointerDown = useCallback(
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
        handleObjectPointerDown,
        handleStagePointerDown,
    };
}
