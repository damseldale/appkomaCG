"use client";

export function Canvas() {
    return (
        <div
            className="
                w-[1280px]
                h-[720px]
                rounded-lg
                bg-white
                shadow-2xl
                relative
                overflow-hidden
            "
        >
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                Canvas (1280 × 720)
            </div>
        </div>
    );
}
