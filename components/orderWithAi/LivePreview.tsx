
import { useEffect, useRef, useState } from "react"

interface LivePreviewProps {
  templateUrl: string
  name: string
  imageUrl: string
}

export default function LivePreview({ templateUrl, name, imageUrl }: LivePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsLoading(true)
    setError(null)

    const templateImg = new Image()
    templateImg.crossOrigin = "anonymous"

    templateImg.onload = () => {
      // Set canvas dimensions to match the template
      canvas.width = templateImg.width
      canvas.height = templateImg.height

      // Draw the template
      ctx.drawImage(templateImg, 0, 0)

      // If we have a user image, draw it
      if (imageUrl) {
        const userImg = new Image()
        userImg.crossOrigin = "anonymous"

        userImg.onload = () => {
          // Example: Draw user image at position (100, 100) with size 200x200
          // These values would need to be adjusted based on the actual template
          ctx.drawImage(userImg, 100, 100, 200, 200)

          // Add the user's name
          if (name) {
            // Again, position would need to be adjusted based on the template
            ctx.font = "30px Arial"
            ctx.fillStyle = "black"
            ctx.textAlign = "center"
            ctx.fillText(name, canvas.width / 2, canvas.height - 100)
          }

          setIsLoading(false)
        }

        userImg.onerror = () => {
          setError("Could not load user image")
          setIsLoading(false)
        }

        userImg.src = imageUrl
      } else {
        // If no user image, just add the name
        if (name) {
          ctx.font = "30px Arial"
          ctx.fillStyle = "black"
          ctx.textAlign = "center"
          ctx.fillText(name, canvas.width / 2, canvas.height - 100)
        }

        setIsLoading(false)
      }
    }

    templateImg.onerror = () => {
      setError("Could not load template image")
      setIsLoading(false)
    }

    templateImg.src = templateUrl
  }, [templateUrl, name, imageUrl])

  if (error) {
    return <div className="border rounded-lg p-4 text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* {isLoading ? <Skeleton className="w-full aspect-[4/3]" /> : <canvas ref={canvasRef} className="w-full h-auto" />} */}
    </div>
  )
}
