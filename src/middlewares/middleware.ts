// import {NextRequest, NextResponse} from "next/server";
// import {getToken} from "next-auth/jwt";

// // Use NextAuth's default middleware handler
// export {default} from "next-auth/middleware";

// export async function middleware(request: NextRequest) {
//   const token = await getToken({req: request});
//   const {pathname} = request.nextUrl;

//   // If the user is authenticated and tries to access auth pages, redirect to /dashboard
//   if (
//     token &&
//     ["/sign-in", "/sign-up", "/verify"].some((p) => pathname.startsWith(p))
//   ) {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   }

//   // If the user is not authenticated and tries to access protected routes like /dashboard
//   if (!token && pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/sign-in", request.url));
//   }

//   // Otherwise, allow the request
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/", "/sign-in", "/sign-up", "/verify/:path*", "/dashboard/:path*"],
// };
