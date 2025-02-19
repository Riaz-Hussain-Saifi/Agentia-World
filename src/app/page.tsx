import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import NeuralCapabilities from "@/components/NeuralCapabilities"
import AISolutions from "@/components/AISolutions"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <NeuralCapabilities />
      <AISolutions />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

