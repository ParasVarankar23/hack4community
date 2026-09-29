"use client"
import Link from "next/link";
import hackathons from "@/data/hackathons.json";
import { Calendar, Users, Trophy } from "lucide-react";

export default function HackathonsPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-10 text-5xl font-bold">
                    Hackathons
                </h1>

                <p className="mt-4 text-gray-400">
                    Join upcoming community-driven hackathons.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {hackathons.map((hackathon) => (
                        <div
                            key={hackathon.id}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-8"
                        >
                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                                {hackathon.status}
                            </span>

                            <h2 className="mt-6 text-3xl font-bold">
                                {hackathon.title}
                            </h2>

                            <p className="mt-4 leading-7 text-gray-400">
                                {hackathon.description}
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-3">
                                <div>
                                    <Calendar size={18} className="text-violet-400" />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Duration
                                    </p>
                                    <p className="font-semibold">
                                        {hackathon.duration}
                                    </p>
                                </div>

                                <div>
                                    <Users size={18} className="text-violet-400" />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Participants
                                    </p>
                                    <p className="font-semibold">
                                        {hackathon.participants}+
                                    </p>
                                </div>

                                <div>
                                    <Trophy size={18} className="text-violet-400" />
                                    <p className="mt-2 text-sm text-gray-500">
                                        Prize Pool
                                    </p>
                                    <p className="font-semibold">
                                        {hackathon.prizePool}
                                    </p>
                                </div>
                            </div>

                            <button className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold">
                                Register Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}