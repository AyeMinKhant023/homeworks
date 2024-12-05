"use client";

import deletePost from "@/app/university/_actions/deletePost";

interface DeleteUniversityButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

export default function DeleteUniversityButton({
  id,
  onDelete,
}: DeleteUniversityButtonProps) {
  const handleDelete = async () => {
    await deletePost(id);
    onDelete(id);
  };

  return {
    handleDelete,
  };
}
