"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-4 text-purple-400">POWERED BY PANAVERSITY</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Enterprise AI Agents
            <br />
            for the Future
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 bg-purple-900 bg-opacity-50 p-6 rounded-lg"
        >
          <div className="text-lg text-gray-300">
            Optimize your workflows with our advanced neural networks and AI solutions.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            Deploy Your AI Agent
          <Button
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
          >
            Watch Demo
          </Button>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

