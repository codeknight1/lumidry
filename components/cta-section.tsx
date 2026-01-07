"use client"

export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#1859a9] to-[#1e85c6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
          Let Lumidry Handle Your Laundry Today
        </h2>
        <button className="bg-[#a6ce3a] hover:bg-[#bada6b] text-white font-bold text-lg px-10 py-4 rounded-xl transition-smooth shadow-soft-lg hover:shadow-soft-lg hover:-translate-y-1">
          Schedule Pickup
        </button>
      </div>
    </section>
  )
}
