import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Link } from "lucide-react"
import MotionSection from "./animations/motion-section"
import FadeIn from "./animations/fade-in"
import StaggerChildren from "./animations/stagger-children"

interface PricingProps {
  dictionary: {
    title: string
    subtitle: string
    packages: {
      name: string
      price: string
      description: string
      features: string[]
      cta: string
      popular?: boolean
    }[]
  }
}

export default function Pricing({ dictionary }: PricingProps) {
  return (
    <MotionSection className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{dictionary.title}</h2>
          <p className="text-xl text-gray-600">{dictionary.subtitle}</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.2}>
          {dictionary.packages.map((pkg, index) => (
            <Card
              key={index}
              className={`border ${pkg.popular ? "border-gold-500 shadow-xl" : "border-gray-200 shadow-lg"} relative h-full flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              <CardHeader className={pkg.popular ? "bg-navy-900 text-white rounded-t-lg" : ""}>
                <CardTitle className={`text-2xl ${pkg.popular ? "text-white" : "text-navy-900"}`}>{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-gold-400" : "text-navy-900"}`}>
                    {pkg.price}
                  </span>
                </div>
                <CardDescription className={pkg.popular ? "text-gray-300" : "text-gray-500"}>
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a href={`/en/contact`}>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gold-600 hover:bg-gold-700 text-navy-900"
                      : "bg-navy-900 hover:bg-navy-800 text-white"
                  }`}
                >
                  {pkg.cta}
                </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </MotionSection>
  )
}
