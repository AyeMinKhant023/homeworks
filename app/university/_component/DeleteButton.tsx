"use client";
import { style } from "../constants/style";

export default function DeleteButton({
  id,
  deletePost,
}: {
  id: number;
  deletePost: (formData: FormData) => Promise<void>;
}) {
  const handleDelete = async () => {
    try {
      const formData = new FormData();
      formData.append("id", id.toString());
      await deletePost(formData);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <button
      className={`${style} border-indigo-50 absolute top-2 right-2`}
      onClick={handleDelete}
    >
      x
    </button>
  );
}
