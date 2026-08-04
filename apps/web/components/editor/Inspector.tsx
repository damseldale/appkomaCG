"use client";

export function Inspector() {
    return (
        <div className="h-full overflow-y-auto">
            <div className="border-b border-neutral-800 p-4">
                <h2 className="font-bold">
                    Inspector
                </h2>
            </div>

            <div className="p-4 space-y-4">

                <div>
                    <label className="text-sm text-neutral-400">
                        Position X
                    </label>

                    <input
                        className="mt-1 w-full rounded bg-neutral-800 p-2"
                        defaultValue={0}
                    />
                </div>

                <div>
                    <label className="text-sm text-neutral-400">
                        Position Y
                    </label>

                    <input
                        className="mt-1 w-full rounded bg-neutral-800 p-2"
                        defaultValue={0}
                    />
                </div>

                <div>
                    <label className="text-sm text-neutral-400">
                        Rotation
                    </label>

                    <input
                        className="mt-1 w-full rounded bg-neutral-800 p-2"
                        defaultValue={0}
                    />
                </div>

            </div>
        </div>
    );
}
