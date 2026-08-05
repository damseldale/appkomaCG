"use client";

import { useEffect } from "react";

import { useSceneStore } from "../../store";

export function KeyboardController() {

    const selectedIds =
        useSceneStore(
            state => state.selectedIds,
        );

    const removeObject =
        useSceneStore(
            state => state.removeObject,
        );

    const clearSelection =
        useSceneStore(
            state => state.clearSelection,
        );

    useEffect(() => {

        function handleKeyDown(
            e: KeyboardEvent,
        ) {

            if (
                e.key !== "Delete"
            ) {
                return;
            }

            if (
                selectedIds.length === 0
            ) {
                return;
            }

            e.preventDefault();

            selectedIds.forEach(
                id =>
                    removeObject(
                        id,
                    ),
            );

            clearSelection();

        }

        window.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );

        };

    }, [
        selectedIds,
        removeObject,
        clearSelection,
    ]);

    return null;

}
