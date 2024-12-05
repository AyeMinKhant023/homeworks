"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export default async function deletePost(formData: FormData) {
  try {
    const id = parseInt(formData.get("id") as string);
    const deletedPost = await prisma.university.delete({
      where: {
        id,
      },
    });
    console.log("University deleted:", deletedPost);
    revalidatePath("/university");
    return { success: true };
  } catch (error) {
    console.error("Error deleting university:", error);
    throw error;
  }
}
