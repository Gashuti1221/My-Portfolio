'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

export default function SkillsSection() {
  const categories = ['Language', 'Frameworks', 'Other Skills'] as const

  return (
    <section
      id="skills"
      className="min-h-screen px-6 sm:px-8 lg:px-16 xl:px-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto w-full text-center space-y-32 sm:space-y-36 lg:space-y-40">
        {/* Main Heading - At the top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-20 sm:pt-24 lg:pt-28"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-500">
            My Skills
          </h2>
        </motion.div>
  
        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-20 lg:gap-24">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`${categoryIndex !== 2 ? 'text-center' : 'text-left md:text-left text-center md:text-start'} space-y-16`}
            >
              <h3 className="text-3xl font-extrabold text-white mb-16">
                {category}
              </h3>
              <div className="space-y-12">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-xl leading-10"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )  
}
