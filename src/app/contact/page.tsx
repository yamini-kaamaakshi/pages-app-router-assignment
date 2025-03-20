"use client"

import { useState, useEffect } from "react";
import Loading from "@/components/loading";
import Link from "next/link"; // Ensure this path is correct

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
                <main className="flex-grow text-center p-10">
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Feel free to reach out to us for any inquiries or support.
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        <p className="text-lg">
                            📍 <span className="font-medium">Address:</span>
                            123 Main Street, New York, NY 10001
                        </p>
                        <p className="text-lg">
                            📞 <span className="font-medium">Phone:</span>
                            <a href="tel:+1234567890" className="text-blue-500 underline">
                                +1 (234) 567-890
                            </a>
                        </p>
                        <p className="text-lg">
                            ✉️ <span className="font-medium">Email:</span>
                            <a href="mailto:contact@yourdomain.com" className="text-blue-500 underline">
                                contact@yourdomain.com
                            </a>
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Connect with us:</h2>
                        <Link
                            href="https://www.linkedin.com/in/kaamaakshi-yamini-462b9b249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline block"
                        >
                            🌐 LinkedIn
                        </Link>
                    </div>
                </main>

            )}
        </>
    );
}
