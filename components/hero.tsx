"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dqfaw22sc/image/upload/v1767821899/Dry_Cleaning_Service_in_Phoenix___Sparklean_Laundry_Phoenix_Reliable_Fast_Affordable_1_a9eecc.jpg"
          alt="Laundry Service Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1859a9] leading-tight text-balance">
                Fresh. Clean. Effortless Laundry.
              </h1>
              <p className="text-xl text-[#1859a9]/70 mt-4">Premium laundry & dry-cleaning services you can trust.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#a6ce3a] hover:bg-[#bada6b] text-white font-semibold px-8 py-3 rounded-xl transition-smooth shadow-soft hover:shadow-soft-lg">
                Book a Pickup
              </button>
              <button className="border-2 border-[#1859a9] text-[#1859a9] hover:bg-[#1859a9] hover:text-white font-semibold px-8 py-3 rounded-xl transition-smooth">
                How It Works
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-full flex items-center justify-center">
            {/* Subtle abstract shapes inspired by fabric folds */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#d1e79b] rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#93b4d9] rounded-full opacity-40 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#a6ce3a] rounded-full opacity-30 blur-3xl"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
