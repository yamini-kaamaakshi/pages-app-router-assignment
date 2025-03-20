"use client";

import { useState, useEffect } from "react";
import productsData from "@/lib/products.json";
import Link from "next/link";
import Loading from "@/components/loading";

// Define the Product type
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export default function ProductsPage() {
    // Explicitly define the state type
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData); // Now TypeScript knows it's an array of Products
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <main className="p-10 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>

                {loading ? (
                    <Loading />
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <li key={product.id} className="p-6 bg-white border rounded-lg shadow hover:shadow-xl transition-shadow duration-200">
                                <Link href={`/products/${product.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                                    <h2>{product.name}</h2>
                                </Link>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="text-lg font-medium text-gray-900 mt-4">${product.price}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}
