'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function AboutSection() {
  const openResume = () => {
    window.open('/resume', '_blank')
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 py-32 bg-white"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-start space-y-16 sm:space-y-20">
        {/* Centered content with increased vertical spacing */}
  
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-balance text-pretty">
            About me
          </h2>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full"
        >
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-8 max-w-xl sm:max-w-2xl lg:max-w-3xl text-balance text-pretty hyphens-auto">
        I&apos;m a Software Engineering student at Bahir Dar University, graduating in 2027, with hands-on experience
        building web applications. I am skilled in React, Redux, JavaScript, Java, JavaFX, HTML, CSS, Next.js, 
        TypeScript, Tailwind CSS, and SQL. A fast learner with strong problem-solving and teamwork skills, 
        I am eager to contribute as a Front-end, Back-end, or Full-stack developer to meaningful projects 
        at a growing tech company or startup.
        </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-start md:justify-center">
            <Button size="sm" className="rounded-none h-12 px-20 md:px-24 w-44 md:w-52" onClick={openResume}>My Resume</Button>
          </div>
        </motion.div>
  
      </div>
    </section>
  )
  
}
