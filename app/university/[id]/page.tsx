import prisma from "@/utils/db";
import Image from "next/image";
import Link from "next/link";
import { backBtnStyle, bgStyle, btnStyle } from "../constants/style";

export default async function UniversityDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const university = await prisma.university.findUnique({
    where: { id: Number(params.id) },
    include: {
      user: true,
    },
  });

  if (!university) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </nav>
        <div className="text-center">
          <h1 className="text-2xl font-bold">University not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${bgStyle} min-h-screen flex flex-col justify-center items-center`}
    >
      <nav className="flex">
        <Link href="/university" className={`${backBtnStyle} justify-start`}>
          Back to Home
        </Link>
      </nav>

      <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row w-full max-w-7xl">
        <div className="relative md:flex-shrink-0 md:w-1/2 h-64 mb-6 md:mb-0">
          <Image
            src={university.imageUrl}
            layout="fill"
            alt={university.name}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 px-10 ">
          <h1 className="text-4xl font-bold mb-4">{university.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">{university.description}</p>

              <div className="space-y-2">
                <p>
                  <strong>Location:</strong> {university.city},{" "}
                  {university.state}
                </p>
                <p>
                  <strong>Rank:</strong> #{university.rank}
                </p>
                <p>
                  <strong>Type:</strong> {university.type}
                </p>
                <p>
                  <strong>Student Count:</strong>{" "}
                  {university.studentCount.toLocaleString()}
                </p>
                <p>
                  <strong>Acceptance Rate:</strong> {university.acceptance}%
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Additional Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Visit Official Website
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold">Administrator</h3>
                  <p>{university.user.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
