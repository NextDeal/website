import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLanguage } from './lib/i18n';
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Redirect root to default language
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}`, request.url)
    );
  }
  
  // If the pathname doesn't start with a language code, redirect to the default language
  if (!pathname.match(/^\/[a-z]{2}\b/)) {
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url)
    );
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next, static, api)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};