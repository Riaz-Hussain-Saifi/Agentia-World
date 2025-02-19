"use client"

import { Brain, MessageSquare, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

const capabilities = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Zap,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
]

export default function NeuralCapabilities() {
  return (
    <section className="py-20 bg-gray-900" id="technology">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Neural Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Powered by next-generation artificial intelligence
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              <capability.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

