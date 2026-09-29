"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIAssistantPage() {
    const [problem, setProblem] = useState("");
    const [result, setResult] = useState("");

    function analyzeProblem() {
        if (!problem.trim()) return;

        setResult(
            `Based on your problem, consider building a platform that allows communities to report issues, track progress and connect with volunteers.`
        );
    }

    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-4xl">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-10 text-5xl font-bold">
                    AI Challenge Assistant
                </h1>

                <p className="mt-4 text-gray-400">
                    Describe a social problem and get solution ideas.
                </p>

                <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Example: Our community has problems with waste collection..."
                    className="mt-10 min-h-48 w-full rounded-2xl border border-white/10 bg-[#0d0f14] p-5 outline-none focus:border-violet-500"
                />

                <button
                    onClick={analyzeProblem}
                    className="mt-5 rounded-xl bg-violet-600 px-7 py-3 font-semibold"
                >
                    Analyze Problem
                </button>

                {result && (
                    <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-7">
                        <h2 className="text-xl font-bold">
                            Suggested Solution
                        </h2>

                        <p className="mt-4 leading-7 text-gray-300">
                            {result}
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}