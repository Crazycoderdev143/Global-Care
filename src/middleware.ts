import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);

  // Optionally modify request/response here

  return NextResponse.next(); // Let the request continue
}

// Apply this middleware to all routes
export const config = {
  matcher: "/:path*", // Matches every path
};
