import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Define which routes do NOT require a user to be logged in
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", 
  "/sign-up(.*)"
])

export default clerkMiddleware(async (auth, request) => {
  // If the route is NOT public, force the user to sign in
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
}