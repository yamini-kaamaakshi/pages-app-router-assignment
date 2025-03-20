"use client"

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
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            {loading ? (
                <Loading />
            ) : (
                <ul className="space-y-2">
                    {products.map((product) => (
                        <li key={product.id} className="p-4 border rounded-lg shadow">
                            <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline">
                                {product.name} - ${product.price}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
