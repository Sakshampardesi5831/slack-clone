import { convexAuthNextjsMiddleware, createRouteMatcher,isAuthenticatedNextjs,nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
 

const isPublicPage=createRouteMatcher(["/auth"]);


export default convexAuthNextjsMiddleware(async (request)=>{
   const isAuthenticatedNextjsResult=await isAuthenticatedNextjs()
  if(!isPublicPage(request) && !isAuthenticatedNextjsResult){
      return nextjsMiddlewareRedirect(request,"/auth");
  }
  if(isPublicPage(request) && isAuthenticatedNextjsResult){
    return nextjsMiddlewareRedirect(request, "/");
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};