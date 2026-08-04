import type { ReactNode } from "react";

import { EditorProvider } from "@/features/editor/providers/EditorProvider";

type EditorLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function EditorLayout({
  children,
}: EditorLayoutProps) {
  return <EditorProvider>{children}</EditorProvider>;
}
