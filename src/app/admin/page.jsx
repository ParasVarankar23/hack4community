"use client"
import Link from "next/link";

export default function AdminPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-10 text-5xl font-bold">
                    Admin Dashboard
                </h1>

                <div className="mt-10 grid gap-5 md:grid-cols-4">
                    {[
                        ["2,450", "Users"],
                        ["18", "Hackathons"],
                        ["64", "Challenges"],
                        ["180", "Teams"],
                    ].map(([value, label]) => (
                        <div
                            key={label}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-7"
                        >
                            <div className="text-3xl font-bold">{value}</div>
                            <p className="mt-2 text-gray-500">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}