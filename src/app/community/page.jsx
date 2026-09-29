"use client"
import Link from "next/link";

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <Link href="/" className="text-violet-400">← Home</Link>

                <h1 className="mt-10 text-5xl font-bold">
                    Community
                </h1>

                <p className="mt-4 text-gray-400">
                    Connect with innovators, developers, students and mentors.
                </p>

                <div className="mt-10 rounded-3xl border border-white/10 bg-[#0d0f14] p-8">
                    <h2 className="text-2xl font-bold">
                        Community Discussions
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Share ideas, find teammates and discuss social innovation.
                    </p>

                    <button className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-semibold">
                        Start Discussion
                    </button>
                </div>
            </div>
        </main>
    );
}