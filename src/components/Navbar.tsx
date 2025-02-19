import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-purple-500">Agentia World</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#technology" className="text-gray-300 hover:text-white transition">
            Technology
          </Link>
          <Link href="#agents" className="text-gray-300 hover:text-white transition">
            Agents
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition">
            Pricing
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Launch Console
        </Button>
      </div>
    </nav>
  )
}

