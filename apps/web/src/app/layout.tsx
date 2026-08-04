import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animaker Clone",
  description: "Professional Animation Editor",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
