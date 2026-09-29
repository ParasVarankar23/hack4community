"use client"
import Link from "next/link";
import submissions from "@/data/submissions.json";

export default function SubmissionsPage() {
    return (
        <main className="min-h-screen bg-[#08090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <Link href="/" className="text-violet-400">← Home</Link>

                <h1 className="mt-10 text-5xl font-bold">
                    Project Submissions
                </h1>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {submissions.map((submission) => (
                        <div
                            key={submission.id}
                            className="rounded-3xl border border-white/10 bg-[#0d0f14] p-7"
                        >
                            <p className="text-sm text-violet-400">
                                {submission.status}
                            </p>

                            <h2 className="mt-3 text-2xl font-bold">
                                {submission.projectName}
                            </h2>

                            <p className="mt-4 text-gray-400">
                                {submission.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {submission.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg bg-white/5 px-3 py-2 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 text-2xl font-bold">
                                Score: {submission.score}/100
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}