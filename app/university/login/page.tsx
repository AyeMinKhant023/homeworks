"use client";
import { useFormState } from "react-dom";
import login from "../_actions/login";
import Link from "next/link";
import { redirect } from "next/navigation";
import SubmitButton from "../_component/SubmitButton";

export default function Login() {
  const [data, action] = useFormState(login, {});

  if (data.message) redirect("/university");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#976841]">
      <div className="bg-[#fff8eb] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="text-[#8B4513] text-3xl">ApplyUni.com</div>
        </div>
        <h1 className="text-2xl font-semibold text-[#8B4513] text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-[#976841] text-center mb-8">
          Sign in to your account
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

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4 mr-2 accent-[#8B4513]"
              />
              <span className="text-[#8B4513]">Remember me</span>
            </label>
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
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-[#976841]">
          Don't have an account?{" "}
          <Link
            href="/university/register"
            className="text-[#8B4513] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

// "use client";
// import { useFormState } from "react-dom";
// import login from "../_actions/login";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import SubmitButton from "../_component/SubmitButton";
// import { style } from "../constants/style";

// export default function Login() {
//   const [data, action] = useFormState(login, {});

//   if (data.message) redirect("/university");

//   return (
//     <div>
//       Login
//       <hr />
//       <form action={action} className="mt-4">
//         <div className="flex flex-col mb-2">
//           <label htmlFor="email">Email</label>
//           <input
//             className={style}
//             type="email"
//             name="email"
//             id="email"
//             required
//           />
//           {data.error?.email && (
//             <div className="text-red-600">{data.error?.email[0]}</div>
//           )}
//         </div>
//         <div className="flex flex-col mb-4">
//           <label htmlFor="password">Password</label>
//           <input
//             className={style}
//             type="password"
//             name="password"
//             id="password"
//             required
//           />
//           {data.error?.password && (
//             <div className="text-red-600">{data.error?.password[0]}</div>
//           )}
//         </div>
//         <div>
//           <input
//             className="w-6 h-6 mr-2 mb-6"
//             type="checkbox"
//             name="remember"
//             id="remember"
//           />
//           <label className="align-top" htmlFor="remember">
//             Remember me
//           </label>
//         </div>
//         <div>
//           {data.error?.message && (
//             <div className="text-red-600">{data.error?.message}</div>
//           )}
//         </div>
//         <div>
//           {data.message ? (
//             <p>{data.message}</p>
//           ) : (
//             <SubmitButton label="Login" />
//           )}
//         </div>
//       </form>
//       <br />
//       <hr />
//       <Link href="/university">Back</Link>
//     </div>
//   );
// }
