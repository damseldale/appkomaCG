"use client";

import {
  Download,
  MousePointer2,
  Play,
  Redo2,
  Save,
  Undo2,
} from "lucide-react";

import { ToolbarButton } from "./ToolbarButton";
import { ToolbarDivider } from "./ToolbarDivider";
import { ToolbarGroup } from "./ToolbarGroup";

export function Toolbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4">

      <div className="flex items-center">

        <h1 className="mr-6 text-lg font-bold">
          Animaker Clone
        </h1>

        <ToolbarGroup>
          <ToolbarButton
            icon={Undo2}
            label="Undo"
          />

          <ToolbarButton
            icon={Redo2}
            label="Redo"
          />
        </ToolbarGroup>

        <ToolbarDivider />

        <ToolbarGroup>
          <ToolbarButton
            icon={MousePointer2}
            label="Select"
            active
          />
        </ToolbarGroup>

        <ToolbarDivider />

        <ToolbarGroup>
          <ToolbarButton
            icon={Play}
            label="Play"
          />
        </ToolbarGroup>

      </div>

      <ToolbarGroup>

        <ToolbarButton
          icon={Save}
          label="Save"
        />

        <ToolbarButton
          icon={Download}
          label="Export"
        />

      </ToolbarGroup>

    </header>
  );
}
