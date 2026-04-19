import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
          Personal site
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Nolan Ruzicki
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Building a strong, curious, capable life — through projects,
          discipline, creativity, and constant learning.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/about"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            About me
          </a>
          <a
            href="/projects"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
          >
            View projects
          </a>
        </div>
      </section>
    </main>
  );
}