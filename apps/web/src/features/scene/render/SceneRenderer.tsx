"use client";

import { useEffect } from "react";

import { bootstrapRenderers } from "./bootstrap";

export function SceneRenderer() {
    useEffect(() => {
        bootstrapRenderers();
    }, []);

    ...
}
