import prisma from "@/utils/db";
import Link from "next/link";
import Logout from "./_component/Logout";
import { getSession } from "@/utils/loginUser";
import DeleteButton from "./_component/DeleteButton";
import ViewDetailButtom from "./_component/ViewDetailButton";
import deletePost from "./_actions/deletePost";
import { style } from "./constants/style";
import Image from "next/image";
import Head from "next/head";
import { University } from "lucide-react";
import ViewDetailButton from "./_component/ViewDetailButton";

export default async function Home() {
  const universities = await prisma.university.findMany({
    include: {
      user: true,
    },
  });

  const user = await getSession();
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
            <div>
              {user ? (
                <>
                  Hello: {user.name} | <Logout />{" "}
                </>
              ) : (
                <>
                  <Link className="mr-2" href="/university/login">
                    Login
                  </Link>
                  |
                  <Link className="ml-2" href="/university/register">
                    Register
                  </Link>
                </>
              )}
            </div>
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
        {/* University Cards */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-8">
            {universities.map((university) => (
              <div
                key={university.id}
                className="border-2 border-blue-800 p-4 rounded-lg min-w-[200px] max-w-[300px] relative"
              >
                <div className="mb-2">{university.name}</div>
                <div className="mt-2">
                  <ViewDetailButton id={university.id} />
                </div>
                <hr />
                <div className="min-h-24 mt-2">{university.rank}</div>
                <div className="w-full h-32 relative">
                  <Image src={university.imageUrl} fill alt={university.name} />
                </div>
                <div>By: {university.user.name}</div>
                {user && user.name === "Admin" && (
                  <>
                    <Link
                      href={{
                        pathname: "/university/edit",
                        query: {
                          id: university.id,
                          name: university.name,
                          state: university.state,
                          city: university.city,
                          rank: university.rank,
                          description: university.description,
                          website: university.website,
                          studentCount: university.studentCount,
                          acceptance: university.acceptance,
                          type: university.type,
                          imageUrl: university.imageUrl,
                        },
                      }}
                      className={`${style} border-0 border-indigo-50 absolute top-2 right-5`}
                    >
                      Edit |
                    </Link>
                    <DeleteButton id={university.id} deletePost={deletePost} />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Links */}
          {user && user.name === "Admin" ? (
            <div className="flex gap-2">
              <Link
                href="/university/new"
                className={`${style} border-indigo-800 rounded-md`}
              >
                New
              </Link>
              <Link
                href="/university/user"
                className={`${style} border-indigo-800 rounded-md`}
              >
                User
              </Link>
              <Link
                href="/"
                className={`${style} border-indigo-800 rounded-md`}
              >
                Home
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/"
                className={`${style} border-indigo-800 rounded-md`}
              >
                Home
              </Link>
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 mt-12">
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

//////////////////////////////////////////////////////////////////////
// import prisma from "@/utils/db";
// import Link from "next/link";
// import Logout from "./_component/Logout";
// import { getSession } from "@/utils/loginUser";
// import DeleteButton from "./_component/DeleteButton";
// import deletePost from "./_actions/deletePost";
// import { style } from "./constants/style";
// import Image from "next/image";

// export default async function University() {
//   const university = await prisma.university.findMany({
//     include: {
//       user: true,
//     },
//   });

//   const user = await getSession();

//   return (
//     <>
//       <nav className="flex justify-between mb-4">
//         <div>Universities</div>
//         <div>
//           {user ? (
//             <>
//               Hello: {user.name} | <Logout />{" "}
//             </>
//           ) : (
//             <>
//               <Link className="mr-2" href="/university/login">
//                 Login
//               </Link>
//               |
//               <Link className="ml-2" href="/university/register">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//       <hr /> <br />
//       <div className="flex flex-wrap gap-4 mb-8">
//         {university.map((university) => (
//           <div
//             key={university.id}
//             className="border-2 border-blue-800 mr-4 p-4 rounded-lg min-w-[200px] max-w-[300px] relative"
//           >
//             <div className="mb-2">{university.name}</div>
//             <hr />
//             <div className="min-h-24 mt-2">{university.rank}</div>
//             <div className="w-full h-32">
//               <Image src={university.imageUrl} fill alt={university.name} />
//             </div>

//             <div>By: {university.user.name}</div>
//             {user ? (
//               <>
//                 <Link
//                   href={{
//                     pathname: "/university/edit",
//                     query: {
//                       id: university.id,
//                       subject: university.city,
//                       detail: university.description,
//                     },
//                   }}
//                   className={`${style} border-0 border-indigo-50  absolute top-2 right-5`}
//                 >
//                   Edit |
//                 </Link>
//                 <DeleteButton id={university.id} deletePost={deletePost} />
//               </>
//             ) : (
//               ""
//             )}
//           </div>
//         ))}
//       </div>
//       <Link
//         href="/university/new"
//         className={`${style} border-indigo-800 mr-2 rounded-md`}
//       >
//         New
//       </Link>
//       <Link
//         href="/university/user"
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
