"use client"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#e8f3d0] flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
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

            {/* Visual placeholder */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <svg
                className="w-full h-full max-w-sm opacity-80"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="clothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1859a9" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1e85c6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M 50 30 Q 100 20 150 40 L 140 100 Q 100 120 60 100 Z" fill="url(#clothGrad)" opacity="0.8" />
                <path d="M 40 90 Q 60 150 100 170 Q 140 150 160 90" fill="#a6ce3a" opacity="0.6" />
                <circle cx="100" cy="80" r="25" fill="#93b4d9" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
