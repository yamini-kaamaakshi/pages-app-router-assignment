"use client"

import { useState, useEffect } from "react";
import Loading from "@/components/loading"; // Ensure this path is correct

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 second delay
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="text-center p-10">
                    <h1 className="text-2xl font-bold">About Us</h1>
                </main>
            )}
        </>
    );
}
