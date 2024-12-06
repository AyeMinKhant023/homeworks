"use client";
import { useFormState } from "react-dom";
import register from "../_actions/register";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [data, action] = useFormState(register, {});

  if (data.message) {
    redirect("/university");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
      {/* Title outside the container */}
      <div className="text-white text-3xl font-semibold mb-6">ApplyUni.com</div>

      {/* White container for the registration form */}
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-blue-600 text-center mb-2">
          Create Account
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Sign up for a new account
        </p>

        <form action={action}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-600 mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="email"
              name="email"
              id="email"
              required
            />
            {data.error?.email && (
              <div className="text-red-500 mt-1 text-sm">
                {data.error?.email[0]}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-600 mb-2">
              Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="text"
              name="name"
              id="name"
              required
            />
            {data.error?.name && (
              <div className="text-red-500 mt-1 text-sm">
                {data.error?.name[0]}
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-600 mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              type="password"
              name="password"
              id="password"
              required
            />
            {data.error?.password && (
              <div className="text-red-500 mt-1 text-sm">
                {data.error?.password[0]}
              </div>
            )}
          </div>

          {data.error?.message && (
            <div className="text-red-500 mb-4 text-sm text-center">
              {data.error?.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <Link
            href="/university/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
