"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signup } from "@/app/actions/auth"

export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError("")

    try {
      const result = await signup(formData)
      if (result.success) {
        router.push("/auth/verify-otp")
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-amber-800">Join Our Kiddie Club!</h1>
        <p className="text-amber-600 mt-2">Create an account to start shopping</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {error && <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">{error}</div>}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-amber-800 font-medium">
            Full Name
          </label>
          <input id="name" name="name" placeholder="Enter your name" required autoComplete="name" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-amber-800 font-medium">
            Email Address
          </label>
          <input id="email" name="email" type="email" placeholder="Enter your email" required autoComplete="email" />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-amber-800 font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            required
            autoComplete="new-password"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-amber-800 font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            autoComplete="new-password"
          />
        </div>

        <button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="text-center text-amber-700">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-amber-500 hover:underline font-medium">
            Log In
          </Link>
        </div>
      </form>
    </div>
  )
}
