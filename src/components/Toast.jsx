"use client";

import { useEffect } from "react";

export default function Toast({ message, onDismiss }) {
    useEffect(() => {
        if (!message) return;

        const timeoutId = window.setTimeout(onDismiss, 3500);
        return () => window.clearTimeout(timeoutId);
    }, [message, onDismiss]);

    if (!message) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            className="fixed right-4 top-4 z-50 flex max-w-sm items-start gap-4 rounded-xl border border-white/15 bg-[#15171d] px-5 py-4 text-sm text-white shadow-2xl"
        >
            <p>{message}</p>
            <button
                type="button"
                aria-label="Dismiss notification"
                onClick={onDismiss}
                className="ml-auto text-gray-400 hover:text-white"
            >
                ×
            </button>
        </div>
    );
}