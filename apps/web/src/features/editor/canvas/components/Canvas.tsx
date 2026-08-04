"use client";

import { StageView } from "./StageView";

export function Canvas() {
  return (
    <section className="flex flex-1 items-center justify-center overflow-auto bg-neutral-800">
      <div className="rounded-xl shadow-2xl">
        <StageView />
      </div>
    </section>
  );
}
