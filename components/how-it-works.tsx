"use client"

import { Calendar, Sparkles, CheckCircle, Truck } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "Schedule Pickup",
    description: "Book a convenient pickup time",
  },
  {
    icon: Sparkles,
    title: "We Clean with Care",
    description: "Professional treatment with premium materials",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Every item inspected for perfection",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh and clean, right to your door",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1859a9] text-balance">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-[#d1e79b] p-6 rounded-2xl mb-6 inline-flex transition-smooth group-hover:shadow-soft-lg group-hover:-translate-y-2">
                  <Icon className="w-12 h-12 text-[#1859a9]" />
                </div>
                <h3 className="text-xl font-bold text-[#1859a9] mb-2">{step.title}</h3>
                <p className="text-[#1859a9]/60 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
