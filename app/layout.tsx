import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lumidry - Premium Laundry & Dry Cleaning Services",
  description:
    "Fresh. Clean. Effortless Laundry. Premium laundry and dry-cleaning services you can trust. Fast, affordable, and eco-friendly.",
  icons: {
    icon: [
      {
        url: "/Lumidry.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: "/Lumidry.png",
    apple: "/Lumidry.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
