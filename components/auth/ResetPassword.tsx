"use client"

import { useState } from "react"
import Link from "next/link"
import { resetPassword } from "@/app/actions/auth"


export function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError("")
    setSuccess(false)

    try {
      const result = await resetPassword(formData)
      if (result.success) {
        setSuccess(true)
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
        <h1 className="text-3xl font-bold text-amber-800">Reset Password</h1>
        <p className="text-amber-600 mt-2">Enter your email and we'll send you a link to reset your password</p>
      </div>

      {success ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <h3 className="text-xl font-medium text-green-800 mb-2">Check Your Email</h3>
          <p className="text-green-700 mb-4">We've sent you an email with instructions to reset your password.</p>
          <Link href="/auth/login">
            <button  className="mt-2">
              Back to Login
            </button>
          </Link>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-6">
          {error && <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">{error}</div>}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-amber-800 font-medium">
              Email Address
            </label>
            <input id="email" name="email" type="email" placeholder="Enter your email" required autoComplete="email" />
          </div>

          <button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Reset Password"}
          </button>

          <div className="text-center text-amber-700">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-amber-500 hover:underline font-medium">
              Log In
            </Link>
          </div>
        </form>
      )}
    </div>
  )
}
