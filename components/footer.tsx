"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1859a9] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="https://res.cloudinary.com/dqfaw22sc/image/upload/v1767821440/Lumidry_qowvlu.png"
              alt="Lumidry Logo"
              width={150}
              height={60}
              className="h-12 w-auto mb-4 drop-shadow-lg"
            />
            <p className="text-white/70">Premium laundry & dry-cleaning services you can trust.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="#home" className="hover:text-[#a6ce3a] transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#a6ce3a] transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#how" className="hover:text-[#a6ce3a] transition-smooth">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#a6ce3a] transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a6ce3a]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a6ce3a]" />
                <span>hello@lumidry.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#a6ce3a]" />
                <span>Downtown District</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-[#a6ce3a] transition-smooth">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#a6ce3a] transition-smooth">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-white/70 hover:text-[#a6ce3a] transition-smooth">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2026 Lumidry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
