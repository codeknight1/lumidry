"use client"

import Image from "next/image"

const services = [
  {
    title: "Wash & Fold",
    description: "Gentle care for everyday clothes",
    image: "https://i.pinimg.com/originals/9e/94/40/9e9440f517426bd1e3c740ad82bba55a.jpg",
  },
  {
    title: "Dry Cleaning",
    description: "Premium treatment for delicate fabrics",
    image: "/placeholder.jpg",
  },
  {
    title: "Ironing",
    description: "Crisp, professional finish",
    image: "/placeholder.jpg",
  },
  {
    title: "Stain Removal",
    description: "Expert removal of tough stains",
    image: "/placeholder.jpg",
  },
  {
    title: "Express Service",
    description: "24-hour rush turnaround available",
    image: "/placeholder.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#e8f3d0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1859a9] text-balance">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-smooth group cursor-pointer hover:-translate-y-1 overflow-hidden flex flex-col min-h-[400px]"
              >
                <div className="relative w-full flex-[0_0_40%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#1859a9] mb-3">{service.title}</h3>
                  <p className="text-[#1859a9]/60 text-sm">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
