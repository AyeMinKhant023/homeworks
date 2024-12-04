import prisma from "@/utils/db";
import Link from "next/link";
import Logout from "./_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import deletePost from "./_actions/deletePost";
import { style } from "./constants/style";
import Image from "next/image";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ApplyUni.com</title>
        <meta
          name="description"
          content="Expert university application guidance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with dark background */}
      <header className="bg-[#1D1D1D] sticky top-0 z-50 w-full">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-white">ApplyUni.com</h1>
          <div className="flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a
              href="/book-consultation"
              className="bg-[#4361EE] hover:bg-[#3851E0] text-white px-6 py-2 rounded-md transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section with background image */}
      <main className="relative" style={{ minHeight: "70vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/20/cambridge.JPG?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Breadcrumb */}
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center text-gray-200 text-sm">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <span className="mx-2">›</span>
              <span className="text-white">Apply</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 pt-16 pb-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Unlock Your Future
              </h2>
              <p className="text-xl text-gray-200 mb-12">
                Expert guidance through your university application process.
              </p>

              {/* Search-like Container */}
              <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-left text-sm text-gray-600 mb-2">
                      University Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter university name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#4361EE]"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-left text-sm text-gray-600 mb-2">
                      Program
                    </label>
                    <input
                      type="text"
                      placeholder="Enter program or course"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#4361EE]"
                    />
                  </div>
                  <div className="flex items-end">
                    <button className="bg-[#4361EE] hover:bg-[#3851E0] text-white px-8 py-3 rounded-md transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* White background content section */}
      <div className="bg-white py-12">
        {/* University Image Grid */}
        <div className="container mx-auto px-6 pb-12">
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white bg-opacity-95 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
                <h3 className="font-semibold text-lg">University Name</h3>
                <p className="text-gray-600">Program details</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">Detailed Information</h3>
          <p>
            Here you can add more detailed content that will start with a white
            background after the hero section. This part of the page will scroll
            normally. You can add as much content here as needed to provide more
            information about your services or insights.
          </p>
        </div>
      </div>
    </>
  );
}
// import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>ApplyUni.com</title>
//         <meta
//           name="description"
//           content="Expert university application guidance."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="bg-white shadow-md sticky top-0 z-50 w-full">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="font-bold text-xl">ApplyUni.com</h1>
//           <div>
//             <a
//               href="#services"
//               className="text-gray-800 hover:text-gray-600 px-4"
//             >
//               Services
//             </a>
//             <a href="#about" className="text-gray-800 hover:text-gray-600 px-4">
//               About Us
//             </a>
//             <a
//               href="/book-consultation"
//               className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
//             >
//               Book Consultation
//             </a>
//           </div>
//         </nav>
//       </header>

//       {/* Fixed Background Section */}
//       <div className="relative" style={{ height: "100vh" }}>
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/20/cambridge.JPG?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//             backgroundSize: "cover",
//             backgroundAttachment: "fixed",
//           }}
//         >
//           <div className="h-screen flex flex-col justify-center items-center text-center">
//             <div className="bg-white bg-opacity-75 rounded-lg p-12 shadow-xl">
//               <h2 className="text-3xl font-bold mb-2">Unlock Your Future</h2>
//               <p className="mb-4">
//                 Expert guidance through your university application process.
//               </p>
//               <a
//                 href="/book-consultation"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Get Started
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Transition to White Background Content */}
//       <div className="bg-white py-12">
//         <div className="container mx-auto px-6">
//           <h3 className="text-3xl font-bold mb-4">Detailed Information</h3>
//           <p>
//             Here you can add more detailed content that will start with a white
//             background after the hero section. This part of the page will scroll
//             normally. You can add as much content here as needed to provide more
//             information about your services or insights.
//           </p>
//           {/* Add more content as needed */}
//         </div>
//       </div>
//     </>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// import prisma from "@/utils/db";
// import Link from "next/link";
// import Logout from "./admin/_component/Logout";
// import { getSession } from "@/utils/loginUser";
// import DeleteButton from "./admin/_component/DeleteButton";
// import deletePost from "./admin/_actions/deletePost";
// import { style } from "./admin/constants/style";
// import Universities from "./admin/[topUniverities]/page";
// import TopUniversities from "./admin/[topUniverities]/page";

// export default async function Blog() {
//   const posts = await prisma.post.findMany({
//     include: {
//       user: true,
//     },
//   });

//   const user = await getSession();

//   return (
//     <>
//       <nav className="flex justify-between mb-4">
//         <div>ApplyUni.com</div>
//         <div>
//           {user ? (
//             <>
//               Hello: {user.name} | <Logout />{" "}
//             </>
//           ) : (
//             <>
//               <Link className="mr-2" href="/admin/login">
//                 Login
//               </Link>
//               |
//               <Link className="ml-2" href="/admin/register">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//       <hr /> <br />
//       <TopUniversities />
//       <div className="flex flex-wrap gap-4 mb-8">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="border-2 border-blue-800 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative"
//           >
//             <div className="mb-2">{post.subject}</div>
//             <hr />
//             <div className="min-h-24 mt-2">{post.detail}</div>
//             <div>By: {post.user.name}</div>
//             {user ? (
//               <>
//                 <Link
//                   href={{
//                     pathname: "/admin/edit",
//                     query: {
//                       id: post.id,
//                       subject: post.subject,
//                       detail: post.detail,
//                     },
//                   }}
//                   className={`${style} border-0 border-indigo-50  absolute top-2 right-5`}
//                 >
//                   Edit |
//                 </Link>
//                 <DeleteButton id={post.id} deletePost={deletePost} />
//               </>
//             ) : (
//               ""
//             )}
//           </div>
//         ))}
//       </div>
//       <Link
//         href="/admin/new"
//         className={`${style} border-indigo-800 mr-2 rounded-md`}
//       >
//         New
//       </Link>
//       <Link
//         href="/admin/edit"
//         className={`${style} border-indigo-800 mr-2 rounded-md`}
//       >
//         Edit
//       </Link>
//       <Link
//         href="/admin/user"
//         className={`${style} border-indigo-800 mr-2 rounded-md`}
//       >
//         User
//       </Link>
//       <Link href="/" className={`${style} border-indigo-800 rounded-md`}>
//         Home
//       </Link>
//     </>
//   );
// }
