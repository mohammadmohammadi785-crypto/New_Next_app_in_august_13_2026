import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.nextUrl));
}

export const config = {
  matcher: "/product",
};
