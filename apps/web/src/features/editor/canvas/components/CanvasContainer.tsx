"use client";

import {
    PropsWithChildren,
    useRef,
} from "react";

import { useResizeObserver }
from "../hooks/useResizeObserver";

interface Props
extends PropsWithChildren {}

export function CanvasContainer({
    children,
}: Props) {

    const ref =
        useRef<HTMLDivElement>(null);

    const size =
        useResizeObserver(ref);

    return (
        <div
            ref={ref}
            className="
            flex-1
            overflow-hidden
            relative
            "
        >

            {size.width > 0 &&
                children}

        </div>
    );
}
