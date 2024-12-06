"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { backBtnStyle, bgStyle, btnStyle } from "../constants/style";

export default function TopUniversities() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/top-universities.json")
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data.universities);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Top 10 Universities 2024 | ApplyUni.com</title>
        <meta
          name="description"
          content="Top 10 Universities ranking for 2024"
        />
      </Head>

      <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/university" className={`${btnStyle}`}>
            Back to Home
          </Link>
        </nav>
      </header>

      <main className={`${bgStyle}max-w-7xl mx-auto px-4 py-8 bg-gray-100 `}>
        <h1 className="text-2xl text-white font-bold mt-5 px-10">
          Top 10 Universities in 2024
        </h1>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-1 gap-6 p-10">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="border border-gray-200 rounded-3xl p-4 relative shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">{uni.name}</h2>
                      <p className="text-gray-600">Country: {uni.country}</p>
                      <hr className="my-3" />
                      <div className="text-2xl font-bold text-blue-600">
                        Rank: #{uni.rank}
                      </div>
                      <div className="text-sm text-gray-500">
                        Score: {uni.score}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
