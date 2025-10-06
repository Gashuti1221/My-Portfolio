'use client'

import { socials } from '@/data/socials'
import { Mail, ExternalLink } from 'lucide-react'
import GithubIcon from '@/components/ui/GithubIcon'
import TwitterIcon from '@/components/ui/TwitterIcon'
import LinkedInIcon from '@/components/ui/LinkedInIcon'
import MediumIcon from '@/components/ui/MediumIcon'

export default function Footer() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedInIcon
      case 'twitter':
        return TwitterIcon
      case 'mail':
        return Mail
      case 'medium':
        return MediumIcon
      default:
        return ExternalLink
    }
  }

  return (
    <footer className="bg-black min-h-[60px] flex items-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ✅ One single flex container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-12">
          {/* Social Icons */}
          {socials.map((social) => {
            const IconComponent = getIcon(social.icon)
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label={social.name}
                onClick={(e) => {
                  if (social.id === 'email') {
                    e.preventDefault()
                    const to = 'gashawmandie@gmail.com'
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`
                    const mailtoUrl = `mailto:${to}`

                    const popup = window.open(gmailUrl, '_blank')
                    if (!popup) {
                      window.location.href = mailtoUrl
                      setTimeout(() => {
                        if (document.hasFocus()) {
                          const text = to
                          if (navigator.clipboard && navigator.clipboard.writeText) {
                            navigator.clipboard.writeText(text).then(() => {
                              alert('No mail app detected. Email copied to clipboard: ' + text)
                            }).catch(() => {
                              alert('No mail app detected. Email: ' + text)
                            })
                          } else {
                            alert('No mail app detected. Email: ' + text)
                          }
                        }
                      }, 600)
                    }
                  }
                }}
              >
                {social.icon === 'medium' ? (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-black flex items-center justify-center font-black text-sm sm:text-base leading-none">
                    G
                  </div>
                ) : (
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                )}
              </a>
            )
          })}

          {/* Copyright */}
          <p className="text-gray-300 text-sm sm:text-base whitespace-nowrap text-center">
            Copyright © {new Date().getFullYear()}{' '}
            <span className="text-white font-semibold">Gashaw Mandie</span>
          </p>
        </div>
      </div>
    </footer>
  )
}


