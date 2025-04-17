"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { resendOtp, verifyOtp } from "@/app/actions/auth"

export function VerifyOtpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0 && !canResend) {
      setCanResend(true)
    }
  }, [countdown, canResend])

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError("")

    try {
      const result = await verifyOtp(formData)
      if (result.success) {
        router.push("/")
      } else {
        setError(result.error || "Invalid OTP. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleResendOtp() {
    setIsResending(true)
    setError("")

    try {
      const result = await resendOtp()
      if (result.success) {
        setCanResend(false)
        setCountdown(60)
      } else {
        setError(result.error || "Failed to resend OTP. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-amber-800">Verify Your Email</h1>
        <p className="text-amber-600 mt-2">We've sent a verification code to your email</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {error && <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg">{error}</div>}

        <div className="space-y-2">
          <label htmlFor="otp" className="block text-amber-800 font-medium">
            Verification Code
          </label>
          <input
            id="otp"
            name="otp"
            placeholder="Enter 6-digit code"
            required
            maxLength={6}
            className="text-center text-xl tracking-widest"
          />
        </div>

        <button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>

        <div className="text-center">
          {canResend ? (
            <button type="button" onClick={handleResendOtp} disabled={isResending} className="mt-2">
              {isResending ? "Resending..." : "Resend Code"}
            </button>
          ) : (
            <p className="text-amber-600">
              Resend code in <span className="font-medium">{countdown}s</span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
