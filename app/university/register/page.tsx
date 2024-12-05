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
    <div className="min-h-screen flex items-center justify-center bg-[#976841]">
      <div className="bg-[#fff8eb] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="text-[#8B4513] text-3xl">☕</div>
        </div>
        <h1 className="text-2xl font-semibold text-[#8B4513] text-center mb-2">
          Create Account
        </h1>
        <p className="text-[#976841] text-center mb-8">
          Sign up for a new account
        </p>

        <form action={action}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#8B4513] mb-2">
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-[#8B4513] bg-white focus:outline-none focus:border-[#976841]"
              type="email"
              name="email"
              id="email"
              required
            />
            {data.error?.email && (
              <div className="text-red-600 mt-1 text-sm">
                {data.error?.email[0]}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-[#8B4513] mb-2">
              Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-[#8B4513] bg-white focus:outline-none focus:border-[#976841]"
              type="text"
              name="name"
              id="name"
              required
            />
            {data.error?.name && (
              <div className="text-red-600 mt-1 text-sm">
                {data.error?.name[0]}
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-[#8B4513] mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-[#8B4513] bg-white focus:outline-none focus:border-[#976841]"
              type="password"
              name="password"
              id="password"
              required
            />
            {data.error?.password && (
              <div className="text-red-600 mt-1 text-sm">
                {data.error?.password[0]}
              </div>
            )}
          </div>

          {data.error?.message && (
            <div className="text-red-600 mb-4 text-sm text-center">
              {data.error?.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-3 rounded-lg hover:bg-[#976841] transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-[#976841]">
          Already have an account?{" "}
          <Link
            href="/university/login"
            className="text-[#8B4513] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

// "use client"
// import { useFormState } from "react-dom"
// import register from "../_actions/register"
// import { redirect } from "next/navigation"
// import Link from "next/link"
// import SubmitButton from "../_component/SubmitButton"
// import { style } from "../constants/style"

// export default function Register() {
//     const [data, action] = useFormState(register, {})

//     if (data.message) {
//         redirect("/blog")
//     }

//     return (
//         <div>
//             Register
//             <hr />
//             <form action={action} className="mt-4">
//                 <div className="flex flex-col mb-2">
//                     <label htmlFor="email">Email</label>
//                     <input className={style} type="email" name="email" id="email" required />
//                     {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
//                 </div>
//                 <div className="flex flex-col mb-2">
//                     <label htmlFor="name">Name</label>
//                     <input className={style} type="text" name="name" id="name" required />
//                     {data.error?.name && <div className="text-red-600">{data.error?.name[0]}</div>}
//                 </div>
//                 <div className="flex flex-col mb-6">
//                     <label htmlFor="password">Password</label>
//                     <input className={style} type="password" name="password" id="password" required />
//                     {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
//                 </div>
//                 <div>
//                     {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
//                 </div>
//                 <div>
//                     {data.message ? <p>{data.message}</p> : <SubmitButton label="Register" />}
//                 </div>
//             </form>
//             <br /><hr />
//             <Link href="/blog">Back</Link>
//         </div>
//     )
// }
