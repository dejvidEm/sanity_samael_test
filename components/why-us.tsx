import Image from "next/image"
import { CheckCircle } from "lucide-react"
import MotionSection from "./animations/motion-section"
import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import fotka from "@/public/why_us.png"

interface WhyUsProps {
  dictionary: {
    title: string
    subtitle: string
    points: {
      title: string
      description: string
    }[]
  }
}

export default function WhyUs({ dictionary }: WhyUsProps) {
  return (
    <MotionSection className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">{dictionary.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{dictionary.subtitle}</p>
            </FadeIn>

            <StaggerChildren className="space-y-6" delay={0.2}>
              {dictionary.points.map((point, index) => (
                <div key={index} className="flex">
                  <CheckCircle className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </StaggerChildren>
          </div>

          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={fotka}
                alt="Why choose Samael Consulting"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionSection>
  )
}
