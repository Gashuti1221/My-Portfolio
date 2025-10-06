      'use client'

      import { motion } from 'framer-motion'
      import { useState } from 'react'
      import Button from '@/components/ui/Button'

      export default function ContactSection() {
        const [formData, setFormData] = useState({
          fullName: '',
          email: '',
          message: ''
        })

        const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
          type: null,
          message: ''
        })

        const [isSubmitting, setIsSubmitting] = useState(false)

        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()

          setIsSubmitting(true)
          setSubmitStatus({ type: null, message: '' })

          try {
            const response = await fetch('https://formspree.io/f/myznznpo', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                fullName: formData.fullName,
                email: formData.email,
                message: formData.message
              })
            })

            type FormspreeResponse = { errors?: Array<{ message?: string }> }
            const data: FormspreeResponse = await response.json().catch(() => ({} as FormspreeResponse))

            if (response.ok) {
              setSubmitStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
              setFormData({ fullName: '', email: '', message: '' })
            } else {
              const errorMessage = data?.errors?.[0]?.message || 'Something went wrong. Please try again.'
              setSubmitStatus({ type: 'error', message: errorMessage })
            }
          } catch (err) {
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' })
          } finally {
            setIsSubmitting(false)
          }
        }

        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
        }

        return (
          <section
            id="contact"
            className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 bg-white"
          >
            <div className="max-w-7xl mx-auto w-full">
              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 leading-tight text-center">
                    If you would love<br />
                    to know more<br />
                    about my previous<br />
                    work and skills<br />
                    please put your<br />
                    message here!
                  </h3>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {submitStatus.type === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h4>
                        <p className="text-green-600">{submitStatus.message}</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 md:gap-y-8">
                      {/* Full Name */}
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full h-12 px-4 py-3 border-0 border-b border-gray-300 bg-transparent
                                    text-gray-800 focus:border-2 focus:border-gray-800 focus:outline-none 
                                    transition-all duration-200 placeholder-gray-400 rounded-md"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full h-12 px-4 py-3 border-0 border-b border-gray-300 bg-transparent
                                    text-gray-800 focus:border-2 focus:border-gray-800 focus:outline-none 
                                    transition-all duration-200 placeholder-gray-400 rounded-md"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Enter message here"
                          rows={5}
                          className="w-full px-4 py-3 border-0 border-b border-gray-300 bg-amber-50
                                    text-gray-800 focus:border-2 focus:border-gray-800 focus:outline-none 
                                    transition-all duration-200 placeholder-gray-400 resize rounded-md"
                          required
                        />
                      </div>

                      {/* Button */}
                      <div className="flex flex-col items-center gap-2">
                        <Button type="submit" size="sm" className="rounded-none h-12 px-20 md:px-24 w-44 md:w-52" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending…' : 'Get in touch'}
                        </Button>
                        {submitStatus.type === 'error' && (
                          <p className="text-sm text-red-600">{submitStatus.message}</p>
                        )}
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        )
      }
