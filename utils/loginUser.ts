// loginUser.ts
"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.SECRET;
if (!secretKey) {
  throw new Error("SECRET environment variable is not set");
}
const key = new TextEncoder().encode(secretKey);

const TIMEOUT = 300; // 300 seconds

export async function encrypt(payload: any) {
  const exp = Math.floor(Date.now() / 1000) + TIMEOUT;
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    cookies().delete("session");
    return null;
  }
}

export async function loginUser(userInput: any, remember: boolean) {
  const { id, email, name } = userInput;

  const timeout = remember ? 24 * 60 * 60 : TIMEOUT;
  const expires = new Date(Date.now() + timeout * 1000);

  const sessionData = {
    id,
    email,
    name,
    exp: Math.floor(expires.getTime() / 1000),
  };

  const session = await encrypt(sessionData);

  cookies().set("session", session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return { message: "Login Success" };
}

export async function logoutUser() {
  cookies().delete("session");
  return { message: "Logout Success" };
}

export async function getSession() {
  try {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
  } catch (error) {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  try {
    const session = request.cookies.get("session")?.value;
    if (!session) return null;

    const parsed = await decrypt(session);
    if (!parsed) return null;

    const expires = new Date(Date.now() + TIMEOUT * 1000);

    // Create new session data
    const sessionData = {
      ...parsed,
      exp: Math.floor(expires.getTime() / 1000),
    };

    const newSession = await encrypt(sessionData);

    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: newSession,
      httpOnly: true,
      expires: expires,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res;
  } catch (error) {
    return null;
  }
}
