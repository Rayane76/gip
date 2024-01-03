import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: req => !req.url.includes('/uploads')
  });
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 

// export function middleware(request) {

//   const allCookies = request.cookies.getAll()
//   return allCookies;
// //   const response = NextResponse.next()
// //   return NextResponse.json({
// //     cookies: allCookies,
// //     success: true,
// // });

// }