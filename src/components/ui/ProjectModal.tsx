'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Badge from './Badge'
import Button from './Button'
import type { ProjectForModal } from '@/types/project'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: ProjectForModal
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Project Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="relative">
                    {/* MacBook Frame */}
                    <div className="bg-gray-800 rounded-t-2xl p-2">
                      <div className="bg-gray-200 rounded-t-xl p-1">
                        <div className="bg-white rounded-lg overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* MacBook Base */}
                    <div className="bg-gray-800 h-4 rounded-b-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Project Details */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="bg-gray-100 text-gray-700 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.liveUrl && (
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      variant="primary"
                      className="flex items-center justify-center gap-2 px-6 py-3"
                    >
                      <span>See Live</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      variant="secondary"
                      className="flex items-center justify-center gap-2 px-6 py-3"
                    >
                      <span>See Sources</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
