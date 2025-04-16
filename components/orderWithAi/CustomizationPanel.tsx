"use client"

import type React from "react"

import { useRef } from "react"


interface CustomizationPanelProps {
  data: {
    name: string
    image: File | null
    imagePreview: string
  }
  onChange: (data: Partial<typeof data>) => void
}

export default function CustomizationPanel({ data, onChange }: CustomizationPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: e.target.value })
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="text-base">
          Your Name
        </label>
        <input id="name" value={data.name} onChange={handleNameChange} placeholder="Enter your name" className="mt-1" />
      </div>

      <div>
        <label className="text-base block mb-1">Your Photo</label>
        <ImageUploader
          image={data.image}
          imagePreview={data.imagePreview}
          onChange={(image, imagePreview) => onChange({ image, imagePreview })}
        />
      </div>
    </div>
  )
}
