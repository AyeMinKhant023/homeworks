"use server";

import prisma from "@/utils/db";
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const updateSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(100),
  state: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  rank: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value > 0 && value <= 1000, {
      message: "Rank must be a number between 1 and 1000",
    }),
  description: z.string().min(5),
  website: z.string().url(),
  studentCount: z
    .string()
    .transform((value) => parseInt(value, 10))
    .refine((value) => !isNaN(value) && value > 0 && value <= 100000, {
      message: "Student count must be a positive integer up to 100,000",
    }),
  acceptance: z
    .string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0 && value <= 100, {
      message: "Acceptance rate must be a number between 0 and 100",
    }),
  type: z.string().min(2).max(50),
  imageUrl: z.string().url(),
});

type FieldErrors = {
  id?: string[];
  name?: string[];
  state?: string[];
  city?: string[];
  rank?: string[];
  description?: string[];
  website?: string[];
  studentCount?: string[];
  acceptance?: string[];
  type?: string[];
  imageUrl?: string[];
  message?: string;
};

export default async function updatePost(
  prevState: unknown,
  formData: FormData
): Promise<{
  message?: string;
  data?: string;
  error?: FieldErrors;
}> {
  const user = await getSession();
  if (!user) return { error: { message: "Session expired, please re-login" } };

  const result = updateSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    console.log("Validation Error: ", result.error.formErrors.fieldErrors);
    return { error: result.error.formErrors.fieldErrors };
  }

  // Convert id from string to int
  const { id, ...updateData } = result.data;
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    return { error: { message: "Invalid ID format" } };
  }

  try {
    await prisma.university.update({
      where: { id: numericId },
      data: updateData,
    });
    revalidatePath("/university");
    return { message: "University updated successfully" };
  } catch (error) {
    console.log("Database update error: " + error);
    return { error: { message: `Update failed: ${error.message}` } };
  }
}
