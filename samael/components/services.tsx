import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Briefcase, LineChart, Building, Users } from "lucide-react"
import StaggerChildren from "./animations/stagger-children"
import FadeIn from "./animations/fade-in"
import MotionSection from "./animations/motion-section"

interface ServicesProps {
  dictionary: {
    title: string
    subtitle: string
    services: {
      title: string
      description: string
    }[]
  }
}

export default function Services({ dictionary }: ServicesProps) {
  const icons = [
    <BarChart3 key="bar-chart" className="h-12 w-12 text-gold-600" />,
    <TrendingUp key="trending-up" className="h-12 w-12 text-gold-600" />,
    <Briefcase key="briefcase" className="h-12 w-12 text-gold-600" />,
    <LineChart key="line-chart" className="h-12 w-12 text-gold-600" />,
    <Building key="building" className="h-12 w-12 text-gold-600" />,
    <Users key="users" className="h-12 w-12 text-gold-600" />,
  ]

  return (
    <MotionSection className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{dictionary.title}</h2>
          <p className="text-xl text-gray-600">{dictionary.subtitle}</p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {dictionary.services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4">{icons[index % icons.length]}</div>
                <CardTitle className="text-xl text-navy-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </MotionSection>
  )
}
