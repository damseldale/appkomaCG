"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import { useResizeObserver } from "../hooks/useResizeObserver";
import { useCanvasStore } from "../store";

interface CanvasContainerProps extends PropsWithChildren {}

export function CanvasContainer({
  children,
}: CanvasContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const size = useResizeObserver(ref);

  const setViewport = useCanvasStore(
    (state) => state.setViewport,
  );

  useEffect(() => {
    setViewport(size);
  }, [size, setViewport]);

  return (
    <div
      ref={ref}
      className="relative flex-1 overflow-hidden"
    >
      {size.width > 0 && children}
    </div>
  );
}
