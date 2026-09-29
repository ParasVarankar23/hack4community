"use client"
import Link from "next/link";
import mentors from "@/data/mentors.json";

export default function MentorsPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <Link href="/" className="text-violet-400">← Home</Link>

                <h1 className="mt-10 text-5xl font-bold">Mentors</h1>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {mentors.map((mentor) => (
                        <div
                            key={mentor.id}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-7"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10 text-xl font-bold text-violet-400">
                                {mentor.name.charAt(0)}
                            </div>

                            <h2 className="mt-5 text-xl font-bold">
                                {mentor.name}
                            </h2>

                            <p className="mt-2 text-gray-400">
                                {mentor.role}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {mentor.expertise.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg bg-white/5 px-3 py-2 text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}