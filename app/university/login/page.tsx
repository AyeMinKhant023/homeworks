"use client";
import { useFormState } from "react-dom";
import login from "../_actions/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import SubmitButton from "../_component/SubmitButton";
import { bgStyle } from "../constants/style";

export default function Login() {
  const [data, action] = useFormState(login, {});

  if (data.message) redirect("/university");

  return (
    <div
      className={`${bgStyle} min-h-screen flex flex-col items-center justify-center`}
    >
      {/* Title outside the container */}
      <div className="text-white text-3xl font-semibold mb-6">ApplyUni.com</div>

      {/* White container for the login form */}
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md h-full">
        <h1 className="text-2xl font-semibold text-blue-600 text-center mb-2">
          Sign In
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome! Please sign in to your account.
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

          <div className="mb-6 flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4 mr-2 accent-blue-500"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </Link>
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
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="/university/register"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
