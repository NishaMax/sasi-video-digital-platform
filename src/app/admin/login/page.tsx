"use client";

import { useActionState } from "react";
import { adminLogin } from "./actions";
import { Shield, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [state, action, pending] = useActionState(adminLogin, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-sm relative z-10">

        {/* Logo area */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.3)] mb-5">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin Access</h1>
          <p className="text-gray-500 text-sm mt-1.5">Sasi Video Management Panel</p>
        </div>

        {/* Card */}
        <div className="bg-[#111111] border border-gray-800/60 rounded-2xl p-7 shadow-2xl">
          <form action={action} className="flex flex-col gap-5">

            {/* Error message */}
            {state?.error && (
              <div className="bg-red-950/40 border border-red-800/50 text-red-400 text-sm rounded-xl px-4 py-3">
                {state.error}
              </div>
            )}

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  required
                  autoComplete="current-password"
                  className="w-full bg-[#1A1A1A] border border-gray-700/60 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm outline-none focus:border-red-600/60 focus:ring-1 focus:ring-red-600/20 transition-all pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={pending}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.35)] active:scale-[0.98]"
            >
              {pending ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : "Login to Dashboard"}
            </button>

          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-xs mt-6">
          Sasi Video · Admin Panel · Restricted Access
        </p>
      </div>
    </div>
  );
}
