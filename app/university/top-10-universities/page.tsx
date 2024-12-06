"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

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
        <nav className="container mx-auto px-6 py-4">
          <Link href="/university" className="text-gray-600 hover:text-black">
            ← Back to Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Top 10 Universities in 2024</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{uni.name}</h2>
                    <p className="text-gray-600 mt-2">Country: {uni.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      #{uni.rank}
                    </div>
                    <div className="text-sm text-gray-500">
                      Score: {uni.score}
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
