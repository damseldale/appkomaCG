"use client";

import {
    Download,
    Grid3X3,
    MousePointer2,
    Play,
    Redo2,
    Save,
    Undo2,
    ZoomIn,
    ZoomOut
} from "lucide-react";

const buttons = [
    { icon: Undo2, label: "Undo" },
    { icon: Redo2, label: "Redo" },
    { icon: MousePointer2, label: "Select" },
    { icon: Grid3X3, label: "Grid" },
    { icon: ZoomIn, label: "Zoom In" },
    { icon: ZoomOut, label: "Zoom Out" },
    { icon: Play, label: "Play" },
    { icon: Save, label: "Save" },
    { icon: Download, label: "Export" }
];

export function Toolbar() {
    return (
        <div className="flex h-full items-center gap-2 px-4">
            <div className="font-semibold text-lg mr-6">
                Animaker Clone
            </div>

            {buttons.map((button) => {
                const Icon = button.icon;

                return (
                    <button
                        key={button.label}
                        className="flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-2 hover:bg-neutral-800 transition"
                    >
                        <Icon size={18} />
                        <span className="text-sm">{button.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
