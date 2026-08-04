"use client";

import {
  Image,
  Shapes,
  Type,
  User,
  Smile,
  Music4,
  Upload,
  FolderOpen,
} from "lucide-react";

const items = [
  { label: "Character", icon: User },
  { label: "Pose", icon: Smile },
  { label: "Background", icon: Image },
  { label: "Text", icon: Type },
  { label: "Shapes", icon: Shapes },
  { label: "Audio", icon: Music4 },
  { label: "Upload", icon: Upload },
  { label: "Project", icon: FolderOpen },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-neutral-800 bg-neutral-900">
      <div className="border-b border-neutral-800 p-4">
        <h2 className="text-lg font-semibold">Library</h2>
      </div>

      <nav className="flex flex-1 flex-col">
        {items.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex items-center gap-3 px-4 py-3 text-left transition hover:bg-neutral-800"
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
