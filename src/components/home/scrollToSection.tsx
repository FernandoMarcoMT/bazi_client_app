"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-amber-400 text-blue-950 shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  )
}
