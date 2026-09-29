"use client"
import Toast from "@/components/Toast";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [toastMessage, setToastMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setToastMessage("Account creation is not connected to an authentication service yet.");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#08090d] px-6 text-white">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0f14] p-8">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-8 text-3xl font-bold">
                    Join Hack4Community
                </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Full Name"
                        required
                        className="mt-8 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="mt-4 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="mt-4 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    />

                    <button type="submit" className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold">
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-violet-400">
                        Login
                    </Link>
                </p>
            </div>
            <Toast message={toastMessage} onDismiss={() => setToastMessage("")} />
        </main>
    );
}