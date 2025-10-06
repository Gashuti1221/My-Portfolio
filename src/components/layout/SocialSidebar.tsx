'use client'

import { socials } from '@/data/socials'
import { Mail, ExternalLink } from 'lucide-react'
import GithubIcon from '@/components/ui/GithubIcon'
import TwitterIcon from '@/components/ui/TwitterIcon'
import LinkedInIcon from '@/components/ui/LinkedInIcon'
import MediumIcon from '@/components/ui/MediumIcon'
import { useState, useEffect } from 'react'

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight
        
        // Only show sidebar when hero section is visible
        setIsVisible(scrollPosition <= heroBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return GithubIcon
      case 'linkedin':
        return LinkedInIcon
      case 'twitter':
        return TwitterIcon
      case 'medium':
        return MediumIcon
      case 'mail':
        return Mail
      default:
        return ExternalLink
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-6 xl:gap-8">
        {socials.map((social) => {
          const IconComponent = getIcon(social.icon)
          const isHttpLink = social.url.startsWith('http')
          const obfuscatedEmail = 'gashawmandie [at] gmail [dot] com'
          return (
            <div key={social.id}>
              <a
                href={social.url}
                target={isHttpLink ? "_blank" : undefined}
                rel={isHttpLink ? "noopener noreferrer" : undefined}
                className="text-white hover:text-orange-500 transition-colors duration-200 group block"
                aria-label={social.name}
                title={social.name}
                onClick={(e) => {
                  // no email handling here anymore; email lives only on resume.html
                }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                  {social.icon === 'medium' ? (
                    <div className="w-full h-full rounded-full bg-white text-black flex items-center justify-center font-black text-base sm:text-lg leading-none">
                      G
                    </div>
                  ) : (
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  )}
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
