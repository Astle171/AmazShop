import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ANON_COOKIE = "amazshop-anon-id";
const ONE_YEAR = 60 * 60 * 24 * 365;

function generateId(): string {
  const seg = () =>
    Math.random().toString(36).slice(2, 10) +
    Date.now().toString(36);
  return `${seg()}-${seg()}`;
}

function hasSessionToken(request: NextRequest): boolean {
  // NextAuth v5 (authjs) stores JWT in these cookie names
  return !!(
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value
  );
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Checkout guard: require authentication
  if (pathname.startsWith("/checkout")) {
    if (!hasSessionToken(request)) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  const response = NextResponse.next();

  // Set anonymous ID cookie if missing
  if (!request.cookies.get(ANON_COOKIE)) {
    response.cookies.set(ANON_COOKIE, generateId(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: ONE_YEAR,
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};
