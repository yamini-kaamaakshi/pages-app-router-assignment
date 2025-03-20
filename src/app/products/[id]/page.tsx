import products from "@/lib/products.json";

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === parseInt(params.id, 10));

    if (!product) {
        return <p className="text-red-500">Product Not Found</p>;
    }

    return (
        <main className="p-10">
            {/* Product Details Section */}
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
            </div>
        </main>
    );
}

// ✅ Enable Static Site Generation (SSG)
export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}
