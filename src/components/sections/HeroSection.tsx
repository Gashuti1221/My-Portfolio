'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 md:space-y-12 lg:mr-40 xl:mr-48 lg:ml-32 transform lg:translate-x-28"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-orange-500"> Hi, I&apos;m Gashaw</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-white overflow-hidden text-balance">
                <motion.div 
                  className="whitespace-nowrap"
                  initial={{ x: -300, opacity: 0 }}
                  animate={prefersReducedMotion ? { x: 0, opacity: 1 } : { x: [300, -300], opacity: 1 }}
                  transition={prefersReducedMotion ? { duration: 0.8 } : { duration: 4, delay: 0.5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                >
                  I&apos;m a Software Developer
                </motion.div>
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl text-balance text-pretty mt-3 md:mt-4">
              I&apos;m a Software Engineering student at Bahir Dar University, graduating in 2027,
              with hands-on experience in web development. I am eager to contribute as a Front-end,
              Back-end, or Full-stack developer, collaborate with teams, and make a meaningful impact. 
              Let&apos;s connect I&apos;d love to explore how I can add value to your team.
            </p>
           
            <Button
              size="sm"
              className="rounded-none h-12 px-20 md:px-24 w-44 md:w-52 mt-4 md:mt-6"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Right Section - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-[20rem] sm:h-[20rem] lg:w-[24rem] lg:h-[24rem] group cursor-pointer touch-manipulation">
              {/* Profile Image */}
              <motion.div
                className="w-full h-full rounded-full border-4 border-orange-500 overflow-hidden bg-white flex items-center justify-center transition-all duration-300 group-hover:border-orange-400 group-hover:shadow-2xl group-hover:shadow-orange-500/25 will-change-transform"
                animate={prefersReducedMotion ? { y: 0 } : { y: [-12, 12, -12] }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                whileHover={{ scale: 1.06, rotate: 1, y: -6 }}
                whileTap={{ scale: 0.9, rotate: -2, y: 10, transition: { type: 'spring', stiffness: 400, damping: 16 } }}
                drag
                dragConstraints={{ top: -16, bottom: 16, left: -16, right: 16 }}
                dragElastic={0.35}
                dragSnapToOrigin
                dragTransition={{ bounceStiffness: 520, bounceDamping: 18 }}
                dragMomentum={false}
                role="button"
                tabIndex={0}
              >
                <Image
                  src="/images/projects/gash.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  // Show the whole image without cropping; align content to the top
                  className="w-full h-full object-contain object-top transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
