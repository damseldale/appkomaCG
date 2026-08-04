"use client";
import { useEditorStore } from "../store/editorStore";
import {
  Download,
  MousePointer2,
  Play,
  Redo2,
  Save,
  Undo2,
} from "lucide-react";

const playing = useEditorStore(
    (state) => state.playing,
);

const setPlaying = useEditorStore(
    (state) => state.setPlaying,
);

const tools = [
  {
    label: "Undo",
    icon: Undo2,
  },
  {
    label: "Redo",
    icon: Redo2,
  },
  {
    label: "Select",
    icon: MousePointer2,
  },
  {
    label: "Play",
    icon: Play,
  },
];

export function Toolbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4">
      <div className="flex items-center gap-2">
        <h1 className="mr-6 text-lg font-bold">
          Animaker Clone
        </h1>

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.label}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition hover:bg-neutral-800"
            >
              <Icon size={18} />
              {tool.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-md bg-neutral-800 px-3 py-2 hover:bg-neutral-700">
          <Save size={18} />
        </button>

        <button className="rounded-md bg-blue-600 px-3 py-2 hover:bg-blue-500">
          <Download size={18} />
        </button>
      </div>
    </header>
  );
}
