"use client"

import React from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          return (
            <motion.div variants={itemVariants} key={child.key || Math.random()}>
              {child}
            </motion.div>
          )
        })}
      </motion.div>
    </LazyMotion>
  )
}
