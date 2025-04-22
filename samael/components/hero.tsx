"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import video from "@/public/videos/business_video.mp4"

interface HeroProps {
  dictionary: {
    title: string
    subtitle: string
    cta: string
    secondaryCta: string
  }
}

export default function Hero({ dictionary }: HeroProps) {

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] -top-24 flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
          Tvoj prehliadač nepodporuje HTML5 video.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            {dictionary.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-xl text-gray-200 mb-8"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            {dictionary.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Button size="lg" className="bg-gold-600 hover:bg-gold-700 text-navy-900 font-medium text-lg px-8">
              {dictionary.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-gold-600 hover:bg-white/10 font-medium text-lg px-8"
            >
              {dictionary.secondaryCta}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}