import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import Pricing from "@/components/pricing"
import FreeConsultation from "@/components/free-consultation"
import type { Locale } from "@/types"
import ReadyMadeCompanies from "@/components/ready-made-companies"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: "Samael Business Consulting",
    description:
      "From startup to enterprise, we provide expert guidance to help your business thrive in today's competitive market.",
  }
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <Hero dictionary={dict.home.hero} />
      <Services dictionary={dict.home.services} />
      <ReadyMadeCompanies dictionary={dict.home.readyMadeCompanies} />
      <WhyUs dictionary={dict.home.whyUs} />
      <Pricing dictionary={dict.home.pricing} />
      <FreeConsultation dictionary={dict.home.freeConsultation} />
    </>
  )
}
