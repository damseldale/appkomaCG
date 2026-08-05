"use client";

import { useEffect } from "react";

import { useSceneStore } from "../../store";

export function KeyboardController() {

    const selectedIds =
        useSceneStore(
            state =>
                state.selectedIds,
        );

    const removeObject =
        useSceneStore(
            state =>
                state.removeObject,
        );

    const duplicateObject =
        useSceneStore(
            state =>
                state.duplicateObject,
        );

    const clearSelection =
        useSceneStore(
            state =>
                state.clearSelection,
        );

    useEffect(() => {

        function handleKeyDown(
            e: KeyboardEvent,
        ) {

            if (
                e.key === "Delete"
            ) {

                e.preventDefault();

                selectedIds.forEach(
                    id =>
                        removeObject(
                            id,
                        ),
                );

                clearSelection();

                return;

            }

            if (
                (e.ctrlKey ||
                    e.metaKey) &&
                e.key.toLowerCase() ===
                    "d"
            ) {

                e.preventDefault();

                selectedIds.forEach(
                    id =>
                        duplicateObject(
                            id,
                        ),
                );

            }

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
        duplicateObject,
        clearSelection,
    ]);

    return null;

}
