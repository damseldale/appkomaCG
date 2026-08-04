"use client";

import type { PropsWithChildren } from "react";

export function ToolbarGroup({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex items-center gap-1">
      {children}
    </div>
  );
}
