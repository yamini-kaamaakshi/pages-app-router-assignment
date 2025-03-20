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
                <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10 px-6">
                    <div className="max-w-4xl w-full text-center">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Welcome to our platform! We are dedicated to providing high-quality services and solutions
                            that cater to our users' needs. Our mission is to deliver innovative and user-friendly experiences
                            that make a difference.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Our team consists of passionate professionals with expertise in various fields, ensuring that we
                            bring the best ideas and solutions to the table. We value collaboration, creativity, and customer
                            satisfaction above all.
                        </p>
                        <p className="text-lg text-gray-700">
                            Thank you for being a part of our journey. We are excited to continue growing and improving with
                            your support!
                        </p>
                    </div>
                </main>
            )}
        </>
    );
}
