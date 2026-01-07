"use client"

import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Eco-friendly cleaning methods",
  "Professional handling of all fabrics",
  "Fast turnaround guaranteed",
  "Affordable pricing without compromise",
  "Trusted service since day one",
]

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1859a9] mb-8 text-balance">Why Choose Lumidry</h2>

            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#a6ce3a] flex-shrink-0 mt-1" />
                  <p className="text-lg text-[#1859a9]/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#d1e79b] to-[#93b4d9] p-12 rounded-3xl">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold text-[#1859a9] mb-2">Fast & Reliable</h3>
                <p className="text-[#1859a9]/70">Same-week turnaround on most items</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold text-[#1859a9] mb-2">Eco-Conscious</h3>
                <p className="text-[#1859a9]/70">Sustainable practices throughout</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold text-[#1859a9] mb-2">Expert Care</h3>
                <p className="text-[#1859a9]/70">Certified professionals handling each item</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
