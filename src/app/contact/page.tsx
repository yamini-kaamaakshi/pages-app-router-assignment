"use client"

import { useState, useEffect } from "react";
import Loading from "@/components/loading"; // Ensure this path is correct

export default function Contact() {
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
                <Loading /> // Show the spinner while loading
            ) : (
                <main className="text-center p-10">
                    <h1 className="text-2xl font-bold">Contact Us</h1>
                </main>
            )}
        </>
    );
}
