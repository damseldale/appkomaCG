"use client";

import { Toolbar } from "./Toolbar";
import { Sidebar } from "./Sidebar";
import { Canvas } from "./Canvas";
import { Inspector } from "./Inspector";
import { Timeline } from "./Timeline";

export function Workspace() {
  return (
    <div className="flex h-full w-full flex-col bg-neutral-950">
      {/* =======================
          TOP TOOLBAR
      ======================== */}
      <header className="h-14 border-b border-neutral-800 bg-neutral-900">
        <Toolbar />
      </header>

      {/* =======================
          CENTER
      ======================== */}
      <section className="flex flex-1 overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-72 border-r border-neutral-800 bg-neutral-900">
          <Sidebar />
        </aside>

        {/* CANVAS */}
        <main className="flex flex-1 items-center justify-center bg-neutral-950">
          <Canvas />
        </main>

        {/* INSPECTOR */}
        <aside className="w-80 border-l border-neutral-800 bg-neutral-900">
          <Inspector />
        </aside>
      </section>

      {/* =======================
          TIMELINE
      ======================== */}
      <footer className="h-60 border-t border-neutral-800 bg-neutral-900">
        <Timeline />
      </footer>
    </div>
  );
}
