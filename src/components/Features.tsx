"use client"

import { Brain, Network, Code, Globe } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  { icon: Brain, title: "Neural Networks", description: "Advanced neural architectures for complex decision making" },
  { icon: Network, title: "Deep Learning", description: "Sophisticated deep learning models for pattern recognition" },
  { icon: Code, title: "Advanced ML", description: "Cutting-edge machine learning algorithms" },
  { icon: Globe, title: "Global Scale", description: "Distributed AI processing across global networks" },
]

export default function Features() {
  return (
    <section className="py-20 bg-black" id="features">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Powered by Advanced AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Built on cutting-edge neural architectures
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

