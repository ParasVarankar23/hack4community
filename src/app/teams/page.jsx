"use client"
import Link from "next/link";
import teams from "@/data/teams.json";

export default function TeamsPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <Link href="/" className="text-violet-400">← Home</Link>

                <h1 className="mt-10 text-5xl font-bold">Teams</h1>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {teams.map((team) => (
                        <div
                            key={team.id}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-7"
                        >
                            <h2 className="text-2xl font-bold">{team.name}</h2>

                            <p className="mt-3 text-gray-400">
                                Captain: {team.captain}
                            </p>

                            <p className="mt-4 text-sm text-gray-500">
                                {team.members.length} members
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black">
                                View Team
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}