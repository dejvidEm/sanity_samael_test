import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import Image from "next/image"
import type { Locale } from "@/types"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import collab from "@/public/strategic-planning-session.png"
import { Badge } from "@/components/ui/badge"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: "About Us",
    description: "Learn more about Samael Consulting and our team of experts.",
  }
}

export default async function About({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <MotionSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">{dict.about.title}</h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">{dict.about.intro}</p>
            <p className="text-lg text-gray-700">{dict.about.mission}</p>
            <p className="text-lg text-gray-700">{dict.about.vision}</p>
          </div>
        </FadeIn>
        <FadeIn direction="left" className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={collab}
            alt={dict.about.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </FadeIn>
        <div className="flex gap-4">
          <Badge className="bg-gold-500 text-white text-md">
            Efficiency
          </Badge>
          <Badge className="bg-gold-500 text-white text-md">
            Productivity
          </Badge>
          <Badge className="bg-gold-500 text-white text-md">
            Determination
          </Badge>
        </div>
      </MotionSection>
    </div>
  )
}
