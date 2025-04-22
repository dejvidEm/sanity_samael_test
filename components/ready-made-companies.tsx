import { Building2, Clock, FileCheck, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import MotionSection from "./animations/motion-section"
import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"
import Image from "next/image"
import ready from "@/public/ready.jpg"

interface ReadyMadeCompaniesProps {
  dictionary: {
    title: string
    subtitle: string
    description: string
    features: string[]
    conclusion: string
    cta: string
  }
}

export default function ReadyMadeCompanies({ dictionary }: ReadyMadeCompaniesProps) {
  const icons = [
    <FileCheck key="clean-history" className="h-6 w-6 text-gold-600" />,
    <Building2 key="valid-numbers" className="h-6 w-6 text-gold-600" />,
    <Clock key="transferable" className="h-6 w-6 text-gold-600" />,
    <Calendar key="different-years" className="h-6 w-6 text-gold-600" />,
    <Package key="optional-services" className="h-6 w-6 text-gold-600" />,
  ]

  return (
    <MotionSection className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{dictionary.title}</h2>
          <p className="text-xl text-gray-600">{dictionary.subtitle}</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-8">{dictionary.description}</p>

            <StaggerChildren className="space-y-6" delay={0.2}>
              {dictionary.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{icons[index % icons.length]}</div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </StaggerChildren>

            <div className="mt-10">
              <p className="text-lg font-medium text-navy-900 mb-6">{dictionary.conclusion}</p>
              <Button className="bg-gold-600 hover:bg-gold-700 text-navy-900 font-medium">{dictionary.cta}</Button>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={ready}
                alt="Ready-made companies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/70 to-navy-800/70 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="h-24 w-24 text-gold-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">24/7</h3>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </MotionSection>
  )
}
