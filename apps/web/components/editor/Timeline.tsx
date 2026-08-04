"use client";

const frames = Array.from({ length: 120 }, (_, i) => i);

export function Timeline() {
    return (
        <div className="h-full overflow-x-auto overflow-y-hidden">

            <div className="flex h-10 border-b border-neutral-800">

                {frames.map((frame) => (
                    <div
                        key={frame}
                        className="
                            w-12
                            shrink-0
                            border-r
                            border-neutral-800
                            flex
                            items-center
                            justify-center
                            text-xs
                        "
                    >
                        {frame}
                    </div>
                ))}

            </div>

            <div className="h-full bg-neutral-950"></div>
        </div>
    );
}
