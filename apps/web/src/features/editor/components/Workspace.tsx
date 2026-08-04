"use client";

import { Inspector } from "./Inspector";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";

export function Workspace() {
  return (
    <div className="flex h-screen w-screen flex-col bg-neutral-950 text-white">
      <Toolbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex flex-1 items-center justify-center bg-neutral-950">
          <div className="rounded-lg border border-dashed border-neutral-700 p-12">
            Canvas Placeholder
          </div>
        </main>

        <Inspector />
      </div>
    </div>
  );
}
