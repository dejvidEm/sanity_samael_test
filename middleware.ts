import { type NextRequest, NextResponse } from "next/server"
import { i18n } from "@/types"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 👉 Dôležité: ak ide o /studio, NEROB NIČ (ani redirect, ani i18n)
  if (pathname.startsWith("/studio")) {
    const basicAuth = request.headers.get("authorization")
    const validAuth = "Basic " + btoa("admin:heslo123") // zmeň si heslo ak chceš

    if (basicAuth === validAuth) {
      return NextResponse.next()
    }

    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected Area"',
      },
    })
  }

  // 🌍 I18N presmerovanie pre ostatné cesty
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale && pathname !== "/") {
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}