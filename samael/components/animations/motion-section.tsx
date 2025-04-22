"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

interface MotionSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MotionSection({ children, className = "", delay = 0 }: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6, delay: delay }}
        className={className}
      >
        {children}
      </motion.section>
    </LazyMotion>
  )
}
