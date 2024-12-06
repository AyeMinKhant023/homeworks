"use client";
import Link from "next/link";
import Logout from "./_component/Logout";
import DeleteButton from "./_component/DeleteButton";
import ViewDetailButton from "./_component/ViewDetailButton";
import deletePost from "./_actions/deletePost";
import {
  adminBtnStyle,
  bgStyle,
  btnStyle,
  mainBtnStyle,
  textInputStyle,
} from "./constants/style";
import Image from "next/image";
import { getSession } from "@/utils/loginUser";
import Footer from "./_component/Footer";
import { useState, useEffect } from "react";
import { University, User } from "@prisma/client";

interface UniversityWithUser extends University {
  user: User;
}

export default function UniversityPage() {
  const [universities, setUniversities] = useState<UniversityWithUser[]>([]);
  const [filteredUniversities, setFilteredUniversities] = useState<
    UniversityWithUser[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/universities");
        const data = await response.json();
        setUniversities(data);
        setFilteredUniversities(data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    const fetchUser = async () => {
      try {
        const userData = await getSession();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
    fetchUser();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = universities.filter(
      (university) =>
        university.name.toLowerCase().includes(term.toLowerCase()) ||
        university.city.toLowerCase().includes(term.toLowerCase()) ||
        university.rank.toString().includes(term)
    );

    setFilteredUniversities(filtered);
  };

  return (
    <>
      {/* Header with dark background */}
      <header className="bg-white sticky top-0 z-50 w-full">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-black">ApplyUni.com</h1>
          <div className="flex items-center space-x-6">
            <div>
              {user ? (
                <div className="flex items-center">
                  <div className="mx-3">{user.name}</div>
                  <Logout />
                </div>
              ) : (
                <>
                  <Link
                    className={`${mainBtnStyle} mx-1`}
                    href="/university/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`${mainBtnStyle} mx-1`}
                    href="/university/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with background image */}
      <main className="relative" style={{ minHeight: "80vh" }}>
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
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">Apply</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 pt-16 pb-24">
            <div className="flex-col max-w-3xl mx-auto text-center my-6">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight font-">
                Unlock Your Future
              </h2>
              <p className="text-xl text-gray-200 mb-12">
                Expert guidance through your university application process.
              </p>

              {/* Search Container */}
              <div className="bg-white bg-opacity-95 p-6 rounded-3xl shadow-lg">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-center text-xl font-bold text-gray-600 mb-5">
                      Search your dream university
                    </label>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearch}
                      placeholder="Enter university name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Top 10 Universities */}
              <div className="mt-12">
                <Link
                  href="university/top-10-universities"
                  className={`${mainBtnStyle}`}
                >
                  View Top 10 Universities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Universities Display Section */}
      <div className={`${bgStyle} py-8`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl text-white font-bold mb-6">
            Available Universities to apply this week
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredUniversities.map((university) => (
              <div
                key={university.id}
                className="border border-gray-200 rounded-3xl p-4 relative shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="rounded-lg overflow-hidden w-full sm:w-48 h-32 relative">
                    <Image
                      src={university.imageUrl}
                      fill
                      alt={university.name}
                    />
                  </div>
                  <div className="flex-1">
                    <div>
                      <h2 className="text-lg font-semibold mb-2 h-14">
                        {university.name}
                      </h2>
                      <hr className="my-3" />
                      <p className="text-gray-600 mb-2">
                        Rank: #{university.rank}
                      </p>
                      <p className="text-sm text-gray-500">
                        Country: {university.city}
                      </p>
                    </div>
                    <div className="flex justify-end gap-2 items-end">
                      <div>
                        {user && user.name === "Admin" && (
                          <div className="flex gap-2">
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
                              className={`${adminBtnStyle}`}
                            >
                              Edit
                            </Link>
                            <DeleteButton
                              id={university.id}
                              deletePost={deletePost}
                            />
                          </div>
                        )}
                      </div>
                      <ViewDetailButton id={university.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav className="mt-8">
            {user && user.name === "Admin" ? (
              <div className="flex gap-3">
                <Link href="/university/new" className={`${adminBtnStyle}`}>
                  New
                </Link>
                <Link href="/university/user" className={`${adminBtnStyle}`}>
                  User
                </Link>
              </div>
            ) : (
              <div className="flex gap-3"></div>
            )}
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}
