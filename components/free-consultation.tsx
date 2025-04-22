import { Button } from "@/components/ui/button"
import MotionSection from "./animations/motion-section"
import FadeIn from "./animations/fade-in"

interface FreeConsultationProps {
  dictionary: {
    title: string
    subtitle: string
    cta: string
  }
}

export default function FreeConsultation({ dictionary }: FreeConsultationProps) {
  return (
    <MotionSection className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{dictionary.title}</h2>
          <p className="text-xl text-gray-300 mb-10">{dictionary.subtitle}</p>
          <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-navy-900 font-medium text-lg px-8">
            {dictionary.cta}
          </Button>
        </FadeIn>
      </div>
    </MotionSection>
  )
}
