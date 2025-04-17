import { VerifyOtpForm } from "@/components/auth/VerifyOtpForm";

export default function VerifyOtpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f3e6] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
        <VerifyOtpForm/>
      </div>
    </div>
  )
}
