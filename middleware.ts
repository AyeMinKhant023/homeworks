import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./utils/loginUser";

export async function middleware(request: NextRequest) {
  console.log("Middleware invoked");

  const res = await updateSession(request);

  if (res) return res;

  const url = request.nextUrl.clone();
  if (url.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
