"use client";
import { adminBtnStyle, style } from "../constants/style";

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
    <button className={`${adminBtnStyle}`} onClick={handleDelete}>
      Delete
    </button>
  );
}
