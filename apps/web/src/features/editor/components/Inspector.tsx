"use client";

export function Inspector() {
  return (
    <aside className="flex h-full w-80 flex-col border-l border-neutral-800 bg-neutral-900">
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-lg font-semibold">
          Inspector
        </h2>
      </div>

      <div className="space-y-5 p-4">
        <div>
          <label className="mb-1 block text-sm text-neutral-400">
            X Position
          </label>

          <input
            type="number"
            defaultValue={0}
            className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-400">
            Y Position
          </label>

          <input
            type="number"
            defaultValue={0}
            className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-neutral-400">
            Rotation
          </label>

          <input
            type="number"
            defaultValue={0}
            className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2"
          />
        </div>
      </div>
    </aside>
  );
}
