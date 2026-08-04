"use client";

const menu = [
    "Character",
    "Pose",
    "Expression",
    "Background",
    "Text",
    "Shape",
    "Assets",
    "Upload",
    "Sticker",
    "Music",
    "Video",
    "Project"
];

export function Sidebar() {
    return (
        <div className="h-full overflow-y-auto">
            <div className="p-4 border-b border-neutral-800">
                <h2 className="font-bold text-lg">
                    Library
                </h2>
            </div>

            {menu.map((item) => (
                <button
                    key={item}
                    className="w-full text-left px-5 py-3 hover:bg-neutral-800 transition"
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
