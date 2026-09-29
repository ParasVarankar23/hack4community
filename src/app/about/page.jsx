"use client"
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-5xl">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-10 text-5xl font-bold">
                    About Hack4Community
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                    Hack4Community is a community-based hackathon platform designed
                    to connect people with real social problems and technology-driven
                    solutions.
                </p>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {[
                        ["Community", "Understand real-world problems."],
                        ["Innovation", "Build creative technology solutions."],
                        ["Impact", "Turn solutions into meaningful change."],
                    ].map(([title, text]) => (
                        <div
                            key={title}
                            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                        >
                            <h2 className="text-xl font-bold">{title}</h2>
                            <p className="mt-3 text-gray-400">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}