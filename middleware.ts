import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./utils/loginUser";

export async function middleware(request: NextRequest) {
  console.log("Middleware invoked");
  const res = await updateSession(request);
  if (res) return res;
  else return NextResponse.redirect(new URL("/university/login", request.url));
}

export const config = {
  matcher: "/university/[id]:path*",
};
