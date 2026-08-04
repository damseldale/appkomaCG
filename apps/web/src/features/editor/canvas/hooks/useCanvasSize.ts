"use client";

import { useEffect, useState } from "react";

import type { CanvasSize } from "../types";

export function useCanvasSize() {
  const [size, setSize] = useState<CanvasSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function resize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener(
        "resize",
        resize,
      );
    };
  }, []);

  return size;
}
