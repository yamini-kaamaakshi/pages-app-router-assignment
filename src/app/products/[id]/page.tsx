import products from "@/lib/products.json";

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === parseInt(params.id, 10));

    if (!product) return <p className="text-red-500">Product Not Found</p>;

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
        </main>
    );
}

// ✅ Enable Static Site Generation (SSG)
export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}
