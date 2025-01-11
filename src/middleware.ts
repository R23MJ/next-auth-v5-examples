import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { PROTECTED_ROUTES } from "./lib/constants";

export default auth((req) => {
  const isAuthed = !!req.auth;
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isAuthed && req.nextUrl.pathname == "/sign-in") {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  if (isProtectedRoute && !isAuthed) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
