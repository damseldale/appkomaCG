"use client";

import { useEffect } from "react";

import {
    commandManager,
} from "../commands";

export function useKeyboardController() {

    useEffect(() => {

        function handleKeyDown(
            event: KeyboardEvent,
        ) {

            const isMac =
                navigator.platform
                    .toUpperCase()
                    .includes("MAC");

            const modifier =
                isMac
                    ? event.metaKey
                    : event.ctrlKey;

            // Undo

            if (
                modifier &&
                event.key.toLowerCase() === "z" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                commandManager.undo();

                return;

            }

            // Redo

            if (
                modifier &&
                (
                    event.key.toLowerCase() === "y" ||

                    (
                        event.key.toLowerCase() === "z" &&
                        event.shiftKey
                    )

                )
            ) {

                event.preventDefault();

                commandManager.redo();

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

    }, []);

}
