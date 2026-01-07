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
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-balance drop-shadow-lg">
                Fresh. Clean. Effortless Laundry.
              </h1>
              <p className="text-xl text-white/90 mt-4 font-medium drop-shadow-md">Premium laundry & dry-cleaning services you can trust.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#a6ce3a] hover:bg-[#bada6b] text-white font-semibold px-8 py-3 rounded-xl transition-smooth shadow-soft hover:shadow-soft-lg">
                Book a Pickup
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1859a9] font-semibold px-8 py-3 rounded-xl transition-smooth shadow-lg">
                How It Works
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dqfaw22sc/image/upload/v1767822909/Small_Laundry_Rooms_zmsyiq.jpg"
                alt="Laundry Room"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
