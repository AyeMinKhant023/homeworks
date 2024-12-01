"use client";

import React, { useEffect, useState } from "react";

type University = {
  id: number;
  name: string;
  city: string;
  rank: string;
};

export default function TopUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/universities")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch universities");
        }
        return response.json();
      })
      .then((data: University[]) => setUniversities(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Top 10 Universities in the US</h1>
      <ul className="mt-4 grid grid-cols-5 gap-5">
        {universities.map((university) => (
          <li key={university.id} className="mb-2 h-full">
            <div className="p-4 border rounded-xl shadow h-full">
              <h2 className="text-xl font-semibold">{university.name}</h2>
              <p>{university.city}</p>
              <p>Ranking: {university.rank}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
