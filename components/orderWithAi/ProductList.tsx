import Image from "next/image"
import Link from "next/link"
import { getProducts } from "@/lib/products"

export default async function ProductList() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-square relative">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
