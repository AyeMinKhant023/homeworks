"use server";

import prisma from "@/utils/db";
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const universitySchema = z.object({
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

export default async function createUniversity(
  prevState: unknown,
  formData: FormData
): Promise<{
  message?: string;
  data?: string;
  error?: FieldErrors;
}> {
  const user = await getSession();
  if (!user) return { error: { message: "Session expired, please re-login" } };

  const result = universitySchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!result.success) {
    console.log("Validation Error: ", result.error.formErrors.fieldErrors);
    return { error: result.error.formErrors.fieldErrors };
  }

  // Assuming you want to link this university to the logged-in user
  try {
    await prisma.university.create({
      data: {
        ...result.data,
        user: {
          connect: { id: user.id }, // Connect university to the existing user by ID
        },
      },
    });
    revalidatePath("/university");
    return { message: "University created successfully!" };
  } catch (error) {
    console.log("Database error: " + error);
    return { error: { message: `Creation failed: ${error.message}` } };
  }
}
