"use client"

import { Building2, Network, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const solutions = [
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Network,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: ShieldCheck,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
]

export default function AISolutions() {
  return (
    <section className="py-20 bg-black" id="agents">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          AI Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Transforming industries with intelligent agents
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              <solution.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

