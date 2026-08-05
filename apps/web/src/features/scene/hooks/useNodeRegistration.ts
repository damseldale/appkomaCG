"use client";

import { useEffect } from "react";

import type Konva from "konva";

import { nodeRegistry } from "./NodeRegistry";

export function useNodeRegistration(
    id: string,
    node: Konva.Node | null,
) {
    useEffect(() => {

        if (!node) {
            return;
        }

        nodeRegistry.register(
            id,
            node,
        );

        return () => {
            nodeRegistry.unregister(id);
        };

    }, [
        id,
        node,
    ]);
}
