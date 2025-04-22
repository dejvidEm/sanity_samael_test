"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/types"
import foto from "@/public/cropped.png"

interface NavbarProps {
  dictionary: {
    home: string
    about: string
    blog: string
    contact: string
  }
  lang: Locale
}

export default function Navbar({ dictionary, lang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  // Handle scroll event for navbar transparency
  const handleScroll = useCallback(() => {
    const offset = window.scrollY
    if (offset > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md border-b border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src={foto}
            alt="Samael Consulting"
            width={150}
            height={50}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`/${lang}`} className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
            {dictionary.home}
          </Link>
          <Link href={`/${lang}/about`} className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
            {dictionary.about}
          </Link>
          <Link href={`/${lang}/blog`} className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
            {dictionary.blog}
          </Link>
          <Link href={`/${lang}/contact`} className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
            {dictionary.contact}
          </Link>
          <LanguageSwitcher currentLang={lang} />
          <Link href={`/${lang}/contact`}>
          <Button className="bg-navy-900 hover:bg-navy-800 text-white">{dictionary.contact}</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href={`/${lang}`}
              className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.about}
            </Link>
            <Link
              href={`/${lang}/blog`}
              className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.blog}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-gray-700 hover:text-navy-900 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.contact}
            </Link>
            <LanguageSwitcher currentLang={lang} />
            <Button className="bg-navy-900 hover:bg-navy-800 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              {dictionary.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
