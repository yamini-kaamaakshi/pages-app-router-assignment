"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/loading"; // Ensure this path is correct

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="text-center p-10">
                    <h1 className="text-2xl font-bold mb-4">About Us</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Welcome to our platform! We are dedicated to providing high-quality services
                        and solutions that cater to our users' needs. Our mission is to deliver
                        innovative and user-friendly experiences that make a difference.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        Our team consists of passionate professionals with expertise in various fields,
                        ensuring that we bring the best ideas and solutions to the table. We value
                        collaboration, creativity, and customer satisfaction above all.
                    </p>
                    <p className="text-lg text-gray-700">
                        Thank you for being a part of our journey. We are excited to continue growing
                        and improving with your support!
                    </p>
                </main>
            )}
        </>
    );
}
