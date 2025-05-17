import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("Request URL:", request.url);

  // Allow us to still access the index page without infinite redirects.
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }

  const response = NextResponse.redirect(new URL("/foo", request.url));
  console.log("Middleware response obj:", {
    url: request.url,
    heders: Object.fromEntries(response.headers.entries()),
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
