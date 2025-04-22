import { redirect } from "next/navigation"
import { i18n } from "@/types"

export default function Home() {
  redirect(`/${i18n.defaultLocale}`)
}
