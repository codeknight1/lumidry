"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    content: "Lumidry has completely transformed my laundry routine. The quality is outstanding!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Fast, reliable, and professional. Exactly what I needed for my busy schedule.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Eco-Conscious Shopper",
    content: "Finally, a laundry service that cares about the environment like I do.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#e8f3d0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1859a9] text-balance">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-smooth">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#a6ce3a] text-[#a6ce3a]" />
                ))}
              </div>
              <p className="text-[#1859a9]/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-[#1859a9]">{testimonial.name}</p>
                <p className="text-sm text-[#1859a9]/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
