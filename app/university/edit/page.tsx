"use client";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import {
  adminBgStyle,
  mainBtnStyle1,
  textInputStyle,
} from "../constants/style";
import updatePost from "../_actions/updatePost";

export default function Edit({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const {
    id,
    name,
    state,
    city,
    rank,
    description,
    website,
    studentCount,
    acceptance,
    type,
    imageUrl,
  } = searchParams;
  console.log(
    "Id: ",
    id,
    name,
    state,
    city,
    rank,
    description,
    website,
    studentCount,
    acceptance,
    type,
    imageUrl
  );

  const [data, action] = useFormState(updatePost, {});

  if (data.message) {
    redirect("/university");
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${adminBgStyle}`}
    >
      <hr />
      <div className="text-white text-3xl font-semibold mt-10">
        Admin Section
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl h-full mt-6">
        <div className="text-black text-center text-3xl font-semibold mb-6">
          Edit University
        </div>
        <form action={action} className="mt-4">
          <input type="hidden" name="id" value={id} />
          {Object.entries(searchParams).map(([key, value]) => {
            if (key !== "id") {
              return (
                <div className="flex flex-col mb-2" key={key}>
                  <label htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    className={textInputStyle}
                    type={
                      key === "website" || key === "imageUrl" ? "url" : "text"
                    }
                    name={key}
                    id={key}
                    defaultValue={value}
                    required
                  />
                  {data.error?.[key] && (
                    <div className="text-red-600">{data.error?.[key][0]}</div>
                  )}
                </div>
              );
            }
          })}
          {data.error?.message && (
            <div className="text-red-600">{data.error?.message}</div>
          )}
          <SubmitButton label="Update" />
        </form>
      </div>
      <br />
      <hr />
      <Link href="/university" className={`${mainBtnStyle1} mb-10`}>
        Back
      </Link>
    </div>
  );
}

///////////////////////////////////////////////
// import prisma from "@/utils/db";
// import { redirect } from "next/navigation";
// import Link from "next/link";

// export default async function Edit({ searchParams }) {
//   const {
//     id,
//     name,
//     state,
//     city,
//     rank,
//     description,
//     website,
//     studentCount,
//     acceptance,
//     type,
//     imageUrl,
//   } = searchParams;

//   async function handleUpdate(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const response = await fetch("/api/university/edit", {
//       method: "POST",
//       body: data,
//     });

//     if (response.ok) {
//       redirect("/university");
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
//       {/* Page Title */}
//       <div className="text-white text-3xl font-semibold mb-6">ApplyUni.com</div>

//       {/* Form Container */}
//       <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-3xl">
//         <h1 className="text-2xl font-semibold text-blue-600 text-center mb-4">
//           Edit University Details
//         </h1>

//         <form onSubmit={handleUpdate} className="space-y-6">
//           {/* University Name */}
//           <div>
//             <label htmlFor="name" className="block text-sm text-blue-600 mb-2">
//               University Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               defaultValue={name}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* State */}
//           <div>
//             <label htmlFor="state" className="block text-sm text-blue-600 mb-2">
//               State
//             </label>
//             <input
//               id="state"
//               name="state"
//               type="text"
//               defaultValue={state}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* City */}
//           <div>
//             <label htmlFor="city" className="block text-sm text-blue-600 mb-2">
//               City
//             </label>
//             <input
//               id="city"
//               name="city"
//               type="text"
//               defaultValue={city}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Rank */}
//           <div>
//             <label htmlFor="rank" className="block text-sm text-blue-600 mb-2">
//               Rank
//             </label>
//             <input
//               id="rank"
//               name="rank"
//               type="number"
//               defaultValue={rank}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm text-blue-600 mb-2"
//             >
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               defaultValue={description}
//               required
//               rows="4"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             ></textarea>
//           </div>

//           {/* Website */}
//           <div>
//             <label
//               htmlFor="website"
//               className="block text-sm text-blue-600 mb-2"
//             >
//               Website
//             </label>
//             <input
//               id="website"
//               name="website"
//               type="url"
//               defaultValue={website}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Student Count */}
//           <div>
//             <label
//               htmlFor="studentCount"
//               className="block text-sm text-blue-600 mb-2"
//             >
//               Student Count
//             </label>
//             <input
//               id="studentCount"
//               name="studentCount"
//               type="number"
//               defaultValue={studentCount}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Acceptance Rate */}
//           <div>
//             <label
//               htmlFor="acceptance"
//               className="block text-sm text-blue-600 mb-2"
//             >
//               Acceptance Rate
//             </label>
//             <input
//               id="acceptance"
//               name="acceptance"
//               type="number"
//               defaultValue={acceptance}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Type */}
//           <div>
//             <label htmlFor="type" className="block text-sm text-blue-600 mb-2">
//               Type
//             </label>
//             <input
//               id="type"
//               name="type"
//               type="text"
//               defaultValue={type}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <label
//               htmlFor="imageUrl"
//               className="block text-sm text-blue-600 mb-2"
//             >
//               Image URL
//             </label>
//             <input
//               id="imageUrl"
//               name="imageUrl"
//               type="url"
//               defaultValue={imageUrl}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
//             >
//               Save Changes
//             </button>
//             <Link
//               href="/university"
//               className="w-full text-center bg-gray-200 text-blue-600 py-3 rounded-full hover:bg-gray-300 transition-colors"
//             >
//               Cancel
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
