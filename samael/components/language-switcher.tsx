"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Locale, i18n } from "@/types"

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = {
    en: "English",
    sk: "Slovenčina",
    hu: "Magyar",
  }

  const switchLanguage = (locale: Locale) => {
    if (locale === currentLang) return

    const newPath = pathname?.replace(`/${currentLang}`, `/${locale}`) || `/${locale}`
    router.push(newPath)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <Globe size={16} />
          <span>{languages[currentLang as keyof typeof languages]}</span>
          <ChevronDown size={16} className="text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className="flex items-center justify-between"
          >
            {languages[locale as keyof typeof languages]}
            {locale === currentLang && <Check size={16} className="ml-2 text-green-600" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
