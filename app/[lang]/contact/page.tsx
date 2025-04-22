import type { Metadata } from "next"
import { getDictionary } from "@/dictionaries"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Locale } from "@/types"
import MotionSection from "@/components/animations/motion-section"
import FadeIn from "@/components/animations/fade-in"
import FAQSection from "@/components/faq-section"

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: "Contact Us",
    description: "Get in touch with Samael Consulting. Send us a message or find our contact information.",
  }
}

export default async function Contact({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-navy-900">{dict.contact.title}</h1>
      </FadeIn>

      <MotionSection className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FadeIn direction="right" className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-navy-900">{dict.contact.formTitle}</h2>
          <ContactForm dictionary={dict.contact.form} lang={params.lang} />
        </FadeIn>

        <FadeIn
          direction="left"
          className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">{dict.contact.infoTitle}</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-gold-500">{dict.contact.addressTitle}</h3>
                <p className="mt-1">{dict.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-gold-500">{dict.contact.phoneTitle}</h3>
                <a href="tel:+421950735422" className="mt-1 hover:underline">
                  +421 950 735 422
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-gold-500">{dict.contact.emailTitle}</h3>
                <a href="mailto:samaelconsulting@icloud.com" className="mt-1 hover:underline">
                  samaelconsulting@icloud.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-gold-500">{dict.contact.hoursTitle}</h3>
                <p className="mt-1">{dict.contact.hours}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </MotionSection>

      <MotionSection className="mt-16" delay={0.3}>
        <FAQSection dictionary={dict.contact.faq} />
      </MotionSection>
    </div>
  )
}
