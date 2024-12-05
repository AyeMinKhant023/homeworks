// actions/viewPost.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function viewPost(id: number) {
  try {
    const university = await prisma.university.findUnique({
      where: { id },
      include: {
        user: true, // Assuming you want to include user details
      },
    });
    return university;
  } catch (error) {
    console.error("Failed to retrieve university details:", error);
    return null;
  }
}
