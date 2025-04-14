"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MessageCircle, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { products } from "@/app/constants";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Product data - in a real app this would come from an API

  type Product = {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    price: number;
    offerPrice?: number;
    offerPercentage?: number;
    features: string[];
    images: string[];
  };

  // Get category background color based on category name
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      Toys: "bg-green-400",
      Books: "bg-blue-400",
      Games: "bg-purple-400",
      Crafts: "bg-pink-400",
      Puzzles: "bg-yellow-400",
      Learning: "bg-red-400",
      Stationery: "bg-red-700",
    };

    return colorMap[category] || "bg-gray-400";
  };
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image); // default main image
    }
  }, [product]);

  // Simulate fetching product data
  useEffect(() => {
    const productId = Number(params.id);

    // Find the product with the matching ID
    const foundProduct = products.find((p) => p.id === productId) || null;

    // Find related products (same category or random if none found)
    let related: Product[] = [];
    if (foundProduct) {
      related = products
        .filter(
          (p) =>
            p.category === foundProduct.category && p.id !== foundProduct.id
        )
        .slice(0, 4);

      // If we don't have enough related products, add some random ones
      if (related.length < 4) {
        const randomProducts = products
          .filter(
            (p) =>
              p.id !== foundProduct.id && !related.find((r) => r.id === p.id)
          )
          .slice(0, 4 - related.length);

        related = [...related, ...randomProducts];
      }
    }

    // Simulate loading delay
    setTimeout(() => {
      setProduct(foundProduct);
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  const openWhatsApp = () => {
    if (!product) return;

    const price: number = parseFloat(
      (product.offerPrice || product.price).toFixed(2)
    );
    const totalPrice: string = (price * quantity).toFixed(2);

    const message = `
  *Order Request*
  ------------------
  *Product:* ${product.title}
  *Category:* ${product.category}
  *Price:* $${price} each
  *Quantity:* ${quantity}
  *Total:* $${totalPrice}
  *Features:* ${product.features.join(", ")}
  *Image:* ${product.image}
  ------------------
  I would like to placee an order for this product. Please provide payment and delivery details.
    `;

    const whatsappUrl = `https://wa.me/+919633167249?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // If loading, show skeleton
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg h-96"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">
          {" Sorry, we couldn't find the product you're looking for."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}

      <Header />
      <div className="container mx-auto px-4 py-8 mt-20">
        {/* Back button */}
        <button className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6"></button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gray-50 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-auto object-contain aspect-square"
              />
              {product.offerPercentage && (
                <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full">
                  {product.offerPercentage}% OFF
                </div>
              )}
              <div
                className={`absolute top-4 right-4 ${getCategoryColor(
                  product.category
                )} text-white px-3 py-1 rounded-full`}
              >
                {product.category}
              </div>
            </div>

            {/* Thumbnail images - would be actual product images in a real app */}
            <div className="grid grid-cols-4 gap-2">
              {product.images?.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`border-2 rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === imgUrl
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.title} view ${i + 1}`}
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-green-600 font-medium">
                In Stock
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-green-600">
                ₹ {product.offerPrice}
              </span>
              {product.offerPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.price}
                </span>
              )}
              {product.offerPercentage && (
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                  Save {product.offerPercentage}%
                </span>
              )}
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                >
                  -
                </button>
                <div className="w-14 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action button */}
            <div className="mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 font-medium"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </motion.button>
            </div>

            {/* Shipping info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <Truck className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-600">
                    {" Free standard shipping on orders over $35"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Satisfaction Guaranteed</h3>
                  <p className="text-sm text-gray-600">
                    {"30-day money-back guarantee"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Easy Returns</h3>
                  <p className="text-sm text-gray-600">
                    {"Hassle-free returns within 14 days"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {/* <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group relative"
              >
                <Link
                  href={`/product/${relatedProduct.id}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View {relatedProduct.title}</span>
                </Link>

                <div className="relative">
                  <img
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.title}
                    className="w-full h-36 object-cover"
                  />
                  <div
                    className={`absolute top-2 right-2 ${getCategoryColor(
                      relatedProduct.category
                    )} text-white text-xs font-medium px-2 py-1 rounded-full`}
                  >
                    {relatedProduct.category}
                  </div>
                  {relatedProduct.offerPercentage && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {relatedProduct.offerPercentage}% OFF
                    </div>
                  )}
                </div>

                <div className="p-3">
                  <h3 className="text-sm font-bold mb-1 text-gray-800 line-clamp-1">
                    {relatedProduct.title}
                  </h3>

                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < relatedProduct.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="font-bold text-sm text-green-600">
                      ${relatedProduct.offerPrice}
                    </span>
                    {relatedProduct.offerPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        ${relatedProduct.price}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
