"use client"
import Link from "next/link";
import submissions from "@/data/submissions.json";

export default function LeaderboardPage() {
    const ranked = [...submissions].sort(
        (a, b) => b.score - a.score
    );

    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-5xl">
                <Link href="/" className="text-violet-400">← Home</Link>

                <h1 className="mt-10 text-5xl font-bold">
                    Leaderboard
                </h1>

                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                    {ranked.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b border-white/10 bg-[#0d0f14] p-6 last:border-0"
                        >
                            <div className="flex items-center gap-5">
                                <span className="text-2xl font-bold text-violet-400">
                                    #{index + 1}
                                </span>

                                <div>
                                    <h2 className="font-bold">
                                        {item.projectName}
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Team submission
                                    </p>
                                </div>
                            </div>

                            <span className="text-xl font-bold">
                                {item.score}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}