"use client";

import { Canvas } from "@/features/editor/canvas/components/Canvas";
import { Inspector } from "./Inspector";
import { Sidebar } from "./Sidebar";
import { Timeline } from "./Timeline";
import { Toolbar } from "./Toolbar";

export function Workspace() {
  return (
    <div className="flex h-screen flex-col bg-neutral-950 text-white">
      <Toolbar />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <Sidebar />

        <Canvas />

        <Inspector />
      </div>

      <Timeline />
    </div>
  );
}
