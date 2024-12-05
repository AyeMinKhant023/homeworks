"use client";
import Link from "next/link";

interface ViewDetailButtonProps {
  id: number;
}

export default function ViewDetailButton({ id }: ViewDetailButtonProps) {
  return (
    <Link
      href={`/university/${id}`}
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      View Details
    </Link>
  );
}
