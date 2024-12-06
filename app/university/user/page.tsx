import prisma from "@/utils/db";
import Link from "next/link";
import { adminBgStyle, mainBtnStyle1 } from "../constants/style";

export default async function User() {
  let users;
  try {
    users = await prisma.user.findMany();
  } catch (error) {
    console.log(error);
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${adminBgStyle}`}
    >
      <div className="text-white text-3xl font-semibold mt-10">
        Admin Section
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-4xl mt-6">
        <h1 className="text-xl font-bold text-gray-900 mb-4">List Users</h1>
        <table className="w-full text-sm md:text-md text-left table-auto border-collapse">
          <thead>
            <tr className="text-red-600">
              <th className="border-b-2 border-gray-300 p-4">ID</th>
              <th className="border-b-2 border-gray-300 p-4">Email</th>
              <th className="border-b-2 border-gray-300 p-4">Name</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <Link href="/university" className={`${mainBtnStyle1}`}>
        Back
      </Link>
    </div>
  );
}
