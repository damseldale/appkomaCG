import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold">
          Animaker Clone
        </h1>

        <p className="text-neutral-400">
          Professional Animation Editor
        </p>

        <Link
          href="/editor"
          className="rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
        >
          Open Editor
        </Link>
      </div>
    </main>
  );
}
