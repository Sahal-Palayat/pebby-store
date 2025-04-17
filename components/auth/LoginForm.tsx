"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { login } from "@/app/actions/auth"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError("")

    try {
      const result = await login(formData)
      if (result.success) {
        router.push("/")
      } else {
        setError(result.error || "Invalid email or password")
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
        <h1 className="text-3xl font-bold text-amber-800">Welcome Back!</h1>
        <p className="text-amber-600 mt-2">Log in to your account</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {error && <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">{error}</div>}

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
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />
          <div className="text-right">
            <Link href="/auth/reset-password" className="text-sm text-amber-500 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <button type="submit" className="w-full"  disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </button>

        <div className="text-center text-amber-700">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-amber-500 hover:underline font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}
