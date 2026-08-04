"use client";

import type { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function ToolbarButton({
  icon: Icon,
  label,
  active = false,
  disabled = false,
  onClick,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex h-9 items-center gap-2 rounded-md px-3 text-sm transition-colors",
        "border border-transparent",
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-neutral-800",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "",
      ].join(" ")}
    >
      <Icon size={18} />

      <span>{label}</span>
    </button>
  );
}
