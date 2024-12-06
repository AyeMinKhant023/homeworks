"use client";
import Link from "next/link";

interface ViewDetailButtonProps {
  id: number;
}

export default function ViewDetailButton({ id }: ViewDetailButtonProps) {
  return (
    <Link
      href={`/university/${id}`}
      className=" inline-block bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition-colors"
    >
      View Details
    </Link>
  );
}
