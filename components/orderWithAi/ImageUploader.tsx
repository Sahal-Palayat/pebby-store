"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"

interface ImageUploaderProps {
  image: File | null
  imagePreview: string
  onChange: (image: File | null, imagePreview: string) => void
}

export default function ImageUploader({ image, imagePreview, onChange }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onChange(file, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0] || null
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onChange(file, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    onChange(null, "")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

      {!imagePreview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary"
          }`}
          onClick={() => fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 mb-1">Drag and drop your image here or click to browse</p>
          <p className="text-xs text-gray-500">Supports: JPG, PNG, GIF (Max 5MB)</p>
        </div>
      ) : (
        <div className="relative">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          </div>
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 rounded-full"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
