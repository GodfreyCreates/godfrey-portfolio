"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IconMenu2, IconX } from '@tabler/icons-react'

const routes = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#tech-stack",
    label: "Tech Stack",
  },
  {
    href: "#certifications",
    label: "Certifications",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#contact",
    label: "Contact",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map(route => ({
        id: route.href.substring(1),
        element: document.querySelector(route.href)
      }))

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      setActiveSection(currentSection ? `#${currentSection.id}` : "")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <nav className="container flex h-16 items-center justify-between px-4 relative">
        <Link href="/" className="absolute left-4 flex items-center gap-2">
          <Image src="/logo.png" alt="GS Logo" width={40} height={40} />
          <span className="text-white text-xl font-semibold">Godfrey Siaga</span>
        </Link>
        

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="flex items-center gap-8 border shadow-lg rounded-full bg-zinc-800/90 px-8 py-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white relative",
                  activeSection === route.href
                    ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full"
                    : "text-zinc-400 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50 hover:after:rounded-full"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>

        <Button 
          className="hidden md:block absolute right-4 rounded-lg bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-background
            transition-all duration-300 ease-in-out
            shadow-lg hover:shadow-xl
            hover:scale-105
            px-6 py-2
            font-medium"
          onClick={() => window.open('/cv.pdf', '_blank')}
          asChild
        >
          <Link href="/cv.pdf" target="_blank">
            Resume
          </Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden absolute right-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white"
          >
            {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900">
          <nav className="container py-4 flex flex-col items-center gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white px-4 relative",
                  activeSection === route.href
                    ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full"
                    : "text-zinc-400 hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50 hover:after:rounded-full"
                )}
                onClick={(e) => scrollToSection(e, route.href)}
              >
                {route.label}
              </Link>
            ))}
            <Button 
              className="w-[calc(100%-2rem)] rounded-lg bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-background"
              onClick={() => window.open('/cv.pdf', '_blank')}
              asChild
            >
              <Link href="/cv.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}