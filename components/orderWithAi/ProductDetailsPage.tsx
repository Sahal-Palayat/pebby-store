"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CustomizationPanel from "@/components/customization-panel"
import LivePreview from "@/components/live-preview"
import type { Product } from "@/lib/types"

export default function ProductDetails({ product }: { product: Product }) {
  const [customizationData, setCustomizationData] = useState({
    name: "",
    image: null as File | null,
    imagePreview: "",
  })

  const handleCustomizationChange = (data: Partial<typeof customizationData>) => {
    setCustomizationData((prev) => ({ ...prev, ...data }))
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <div className="prose max-w-none mb-6">
          <p>{product.description}</p>
        </div>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Customize Your Name Slip</h2>
        <CustomizationPanel onChange={handleCustomizationChange} data={customizationData} />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">Live Preview</h3>
          <LivePreview
            templateUrl={product.templateUrl}
            name={customizationData.name}
            imageUrl={customizationData.imagePreview}
          />
        </div>

        <Button
          className="w-full mt-6"
          size="lg"
          disabled={!customizationData.name || !customizationData.image}
          onClick={() => {
            if (customizationData.name && customizationData.image) {
              generatePdfAndShare(product, customizationData)
            }
          }}
        >
          Order via WhatsApp
        </Button>
      </Card>
    </div>
  )
}

async function generatePdfAndShare(
  product: Product,
  customizationData: { name: string; image: File | null; imagePreview: string },
) {
  try {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) throw new Error("Could not get canvas context")

    // Create PDF from the customized template
    const pdfBlob = await createPdf(canvas, product.templateUrl, customizationData)

    // Share via WhatsApp
    const message = `Hello! I'd like to order a customized name slip: ${product.name}`
    const whatsappUrl = `https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("There was an error generating your customized name slip. Please try again.")
  }
}

async function createPdf(
  canvas: HTMLCanvasElement,
  templateUrl: string,
  customizationData: { name: string; image: File | null; imagePreview: string },
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      // Set canvas dimensions to match the template
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext("2d")
      if (!ctx) return reject(new Error("Could not get canvas context"))

      // Draw the template
      ctx.drawImage(img, 0, 0)

      // Draw the user's image at the appropriate position
      // Note: In a real implementation, you would need to know the exact position
      // where the user's image should be placed on the template
      if (customizationData.imagePreview) {
        const userImg = new Image()
        userImg.crossOrigin = "anonymous"
        userImg.onload = () => {
          // Example: Draw user image at position (100, 100) with size 200x200
          // These values would need to be adjusted based on the actual template
          ctx.drawImage(userImg, 100, 100, 200, 200)

          // Add the user's name
          // Again, position would need to be adjusted based on the template
          ctx.font = "30px Arial"
          ctx.fillStyle = "black"
          ctx.textAlign = "center"
          ctx.fillText(customizationData.name, canvas.width / 2, canvas.height - 100)

          // Convert canvas to blob
          canvas.toBlob((blob) => {
            if (blob) resolve(blob)
            else reject(new Error("Could not create blob from canvas"))
          }, "image/png")
        }
        userImg.onerror = () => reject(new Error("Could not load user image"))
        userImg.src = customizationData.imagePreview
      } else {
        reject(new Error("No user image provided"))
      }
    }
    img.onerror = () => reject(new Error("Could not load template image"))
    img.src = templateUrl
  })
}
