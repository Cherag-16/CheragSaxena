'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  variants?: Variants
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

const getVariants = (direction: string = 'up'): Variants => {
  const baseVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }
    case 'down':
      return {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }
    case 'left':
      return {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }
    case 'right':
      return {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
      }
    case 'scale':
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }
    default:
      return baseVariants
  }
}

export function ScrollReveal({
  children,
  variants,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const animationVariants = variants || getVariants(direction)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: StaggerItemProps) {
  const animationVariants = getVariants(direction)

  return (
    <motion.div
      variants={animationVariants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface HoverScaleProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function HoverScale({
  children,
  className,
  scale = 1.05,
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}
