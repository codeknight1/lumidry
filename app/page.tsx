import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Services from "@/components/services"
import WhyChoose from "@/components/why-choose"
import Testimonials from "@/components/testimonials"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8f3d0]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
