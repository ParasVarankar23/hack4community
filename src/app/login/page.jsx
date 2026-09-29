"use client"
import Toast from "@/components/Toast";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [toastMessage, setToastMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setToastMessage("Login is not connected to an authentication service yet.");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#08090d] px-6 text-white">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0f14] p-8">
                <Link href="/" className="text-violet-400">
                    ← Home
                </Link>

                <h1 className="mt-8 text-3xl font-bold">
                    Welcome Back
                </h1>

                <p className="mt-2 text-gray-500">
                    Login to your Hack4Community account.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="mt-8 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="mt-4 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                    />

                    <button type="submit" className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold">
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-violet-400">
                        Register
                    </Link>
                </p>
            </div>
            <Toast message={toastMessage} onDismiss={() => setToastMessage("")} />
        </main>
    );
}