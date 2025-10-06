'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    // Redirect to the HTML file
    window.location.href = '/resume.html'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
    </div>
  )
}
