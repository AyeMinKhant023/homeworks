import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const universities = await prisma.university.findMany({
      include: {
        user: true,
      },
    });
    return NextResponse.json(universities);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
