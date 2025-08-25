export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createCsrfToken } from "@lib/security/csrf";

export async function GET() {
  const token = createCsrfToken();
  const res = NextResponse.json({ token });
  res.cookies.set("csrf", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60
  });
  return res;
}
