import type { Metadata } from "next"
import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getDictionary } from "@/dictionaries"
import { type Locale, i18n } from "@/types"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: {
      template: "%s | Samael Consulting",
      default: "Samael Consulting",
    },
    description: "Expert business consulting services for startups and enterprises.",
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: "/en",
        sk: "/sk",
        hu: "/hu",
      },
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Navbar dictionary={dict.navigation} lang={params.lang} />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer dictionary={dict.footer} />
    </>
  )
}
