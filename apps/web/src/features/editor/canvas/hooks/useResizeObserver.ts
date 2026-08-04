"use client";

import {
    RefObject,
    useEffect,
    useState,
} from "react";

export interface Size {
    width: number;
    height: number;
}

export function useResizeObserver(
    ref: RefObject<HTMLElement>,
) {
    const [size, setSize] =
        useState<Size>({
            width: 0,
            height: 0,
        });

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer =
            new ResizeObserver(
                ([entry]) => {
                    const rect =
                        entry.contentRect;

                    setSize({
                        width: rect.width,
                        height: rect.height,
                    });
                },
            );

        observer.observe(element);

        return () =>
            observer.disconnect();
    }, [ref]);

    return size;
}
