"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import MotionSection from "./animations/motion-section"
import FadeIn from "./animations/fade-in"
import { memo } from "react"

interface FAQSectionProps {
  dictionary: {
    title: string
    subtitle: string
    questions: {
      question: string
      answer: string
    }[]
  }
}

// Memoize the component to prevent unnecessary re-renders
const FAQSection = memo(function FAQSection({ dictionary }: FAQSectionProps) {
  return (
    <MotionSection className="py-16 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">{dictionary.title}</h2>
          <p className="text-lg text-gray-600">{dictionary.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {dictionary.questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                data-faq-item
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-medium text-navy-900 hover:text-navy-700 hover:no-underline"
                  aria-controls={`faq-content-${index}`}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700" id={`faq-content-${index}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </MotionSection>
  )
})

export default FAQSection
