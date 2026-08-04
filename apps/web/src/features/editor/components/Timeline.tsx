"use client";

const TOTAL_FRAMES = 120;

export function Timeline() {
  return (
    <footer className="h-56 border-t border-neutral-800 bg-neutral-900">
      <div className="border-b border-neutral-800 px-4 py-2 font-medium">
        Timeline
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-max">
          {Array.from({ length: TOTAL_FRAMES }).map((_, index) => (
            <div
              key={index}
              className="flex h-10 w-12 items-center justify-center border-r border-neutral-800 text-xs text-neutral-400"
            >
              {index}
            </div>
          ))}
        </div>

        <div className="h-40 bg-neutral-950" />
      </div>
    </footer>
  );
}
