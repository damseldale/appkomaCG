"use client";

import { Toolbar } from "./Toolbar";

export function Workspace() {
  return (
    <div className="flex h-screen w-screen flex-col bg-neutral-950 text-white">
      <Toolbar />

      <div className="flex flex-1 items-center justify-center">
        <div className="rounded-lg border border-dashed border-neutral-700 p-10">
          <h2 className="text-xl font-semibold">
            Editor Workspace
          </h2>

          <p className="mt-2 text-neutral-400">
            Sprint 1 - Foundation
          </p>
        </div>
      </div>
    </div>
  );
}
