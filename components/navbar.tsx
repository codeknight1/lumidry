"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-smooth ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://res.cloudinary.com/dqfaw22sc/image/upload/v1767821440/Lumidry_qowvlu.png"
            alt="Lumidry Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-sm font-medium text-[#1859a9] hover:text-[#a6ce3a] transition-smooth">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium text-[#1859a9] hover:text-[#a6ce3a] transition-smooth">
            Services
          </Link>
          <Link href="#how" className="text-sm font-medium text-[#1859a9] hover:text-[#a6ce3a] transition-smooth">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-[#1859a9] hover:text-[#a6ce3a] transition-smooth">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-[#1859a9] hover:text-[#a6ce3a] transition-smooth">
            Contact
          </Link>
        </div>

        <button className="bg-[#a6ce3a] hover:bg-[#bada6b] text-white font-semibold px-6 py-2 rounded-xl transition-smooth shadow-soft">
          Book Pickup
        </button>
      </div>
    </nav>
  )
}
