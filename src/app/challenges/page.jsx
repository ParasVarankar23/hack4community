"use client";

import Link from "next/link";
import challenges from "@/data/challenges.json";
import { Search, MapPin, Users } from "lucide-react";
import { useState } from "react";

export default function ChallengesPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(challenges.map((item) => item.category)),
    ];

    const filtered = challenges.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || item.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <div className="mt-10">
                    <p className="text-sm uppercase tracking-widest text-violet-400">
                        Challenges
                    </p>

                    <h1 className="mt-3 text-5xl font-bold">
                        Solve Real Problems
                    </h1>

                    <p className="mt-4 max-w-2xl text-gray-400">
                        Choose a community challenge and build a solution.
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4">
                        <Search size={18} className="text-gray-500" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search challenges..."
                            className="w-full bg-transparent py-4 outline-none"
                        />
                    </div>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-xl border border-white/10 bg-[#111318] px-5 py-4 outline-none"
                    >
                        {categories.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((challenge) => (
                        <div
                            key={challenge.id}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-7 transition hover:border-violet-500/40"
                        >
                            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                                {challenge.category}
                            </span>

                            <h2 className="mt-6 text-xl font-bold">
                                {challenge.title}
                            </h2>

                            <p className="mt-4 text-sm leading-6 text-gray-400">
                                {challenge.description}
                            </p>

                            <div className="mt-6 space-y-3 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} />
                                    {challenge.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Users size={16} />
                                    {challenge.teams} teams
                                </div>
                            </div>

                            <button className="mt-7 w-full rounded-xl bg-white py-3 font-semibold text-black">
                                Join Challenge
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}