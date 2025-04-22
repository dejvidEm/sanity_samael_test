import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Samael Consulting",
    default: "Samael Consulting - Strategic Business Solutions",
  },
  description:
    "Expert business consulting services for startups and enterprises. Strategic planning, financial analysis, and operational efficiency solutions.",
  keywords: [
    "business consulting",
    "strategic planning",
    "financial analysis",
    "market research",
    "operational efficiency",
  ],
  authors: [{ name: "Samael Consulting" }],
  creator: "Samael Consulting",
  publisher: "Samael Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#0c1f3e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
