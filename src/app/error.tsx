"use client";

import Link from "next/link";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center p-10">
            <h1 className="text-3xl font-bold text-red-600">Error Loading Blog</h1>
            <p className="text-gray-600 mt-2">{error?.message || "An unexpected error occurred."}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Try Again
            </button>
            <Link href="/" className="mt-2 text-blue-500 hover:underline">Go Back Home</Link>
        </div>
    );
}
