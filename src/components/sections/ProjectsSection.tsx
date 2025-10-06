'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ProjectModal from '@/components/ui/ProjectModal'
import type { ProjectForModal } from '@/types/project'

function ProjectButton({ project }: { project: ProjectForModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="primary"
        size="sm"
        className="rounded-none h-12 px-20 md:px-24 w-64 md:w-72"
      >
        See Project
      </Button>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-4 sm:px-8 lg:px-16 xl:px-24 bg-white flex flex-col justify-center overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center h-full space-y-40 sm:space-y-48 lg:space-y-56">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-24 sm:w-32 lg:w-40 bg-slate-900"></div>
            <h2 className="mx-4 text-4xl lg:text-5xl font-bold text-slate-900 whitespace-nowrap text-balance text-pretty">
              My Recent Works
            </h2>
            <div className="h-[2px] w-24 sm:w-32 lg:w-40 bg-slate-900"></div>
          </div>
        </motion.div>

        {/* Featured Project */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[90vh] w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <div className="w-full max-w-lg mx-auto h-[460px] flex items-center justify-center group cursor-pointer overflow-hidden rounded-2xl border border-slate-300 shadow-lg bg-gray-50">
              <img
                src="/images/projects/bookStore.png"
                alt="Online Bookstore App"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-blue-500/25 group-active:scale-95"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center flex flex-col justify-center h-full w-full px-2 sm:px-0"
          >
            <h2 className="text-4xl font-extrabold text-blue-600 text-balance text-pretty leading-tight max-w-2xl mx-auto">
              Online Bookstore App
            </h2>
            <p lang="en" className="text-gray-700 leading-relaxed lg:leading-loose text-balance text-pretty hyphens-auto max-w-2xl mx-auto">
              A comprehensive online bookstore application that allows users to
              browse, search, add, and remove books. Features include book
              inventory management,  shopping cart functionality,
              and an interactive interface for a seamless shopping experience.
            </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <h3 className="text-lg font-extrabold text-slate-900">React</h3>
            <h3 className="text-lg font-extrabold text-slate-900">JavaScript</h3>
            <h3 className="text-lg font-extrabold text-slate-900">Redux</h3>
            <h3 className="text-lg font-extrabold text-slate-900">CSS</h3>
          </div>
            <div className="flex justify-center">
              <ProjectButton
                project={{
                  title: 'Online Bookstore App',
                  description:'A comprehensive online bookstore application that allows users to browse, search, and purchase books. Features include book inventory management, user accounts, shopping cart functionality, and an interactive interface for a seamless shopping experience.',
                  image: '/images/projects/bookStore.png',
                  technologies: ['React', 'JavaScript', 'Redux', 'CSS'],
                  liveUrl: 'https://react-bookshelf-ivory.vercel.app',
                  githubUrl: 'https://github.com/Gashuti1221/react-bookshelf'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center mt-6 w-full"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-[2px] w-20 sm:w-28 lg:w-36 bg-slate-900"></div>
            <h3 className="mx-4 text-2xl lg:text-3xl font-bold text-slate-900 whitespace-nowrap">
              Other Projects
            </h3>
            <div className="h-[2px] w-20 sm:w-28 lg:w-36 bg-slate-900"></div>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto justify-center justify-items-center place-items-center">
            {projects
              .filter((project) => project.title !== 'Online Bookstore App')
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Card className="h-full shadow-lg rounded-2xl overflow-hidden flex flex-col w-full">
                    <div className="p-6 flex flex-col h-full w-full">
                      <div className="mb-4 h-[260px] w-full max-w-lg mx-auto flex items-center justify-center overflow-hidden rounded-xl group cursor-pointer relative border border-slate-300 shadow-lg bg-gray-50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                        />
                      </div>

                      <h2 className="text-xl font-extrabold text-slate-900 mb-2 text-center">
                        {project.title}
                      </h2>

                      <div className="flex flex-wrap gap-3 mb-4 justify-center">
                        {project.technologies.map((tech) => (
                          <h3 key={tech} className="text-base font-extrabold text-slate-900">
                            {tech}
                          </h3>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <ProjectButton project={project} />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
