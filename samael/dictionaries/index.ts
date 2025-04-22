import type { Locale } from "@/types"
import { en } from "./en"
import { sk } from "./sk"
import { hu } from "./hu"

const dictionaries = {
  en,
  sk,
  hu,
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] || dictionaries.en
}
