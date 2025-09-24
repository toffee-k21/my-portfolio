"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { SiApachekafka, SiPython, SiGo, SiJava, SiSvelte, SiDjango } from "react-icons/si"

const exploredTech = [
  { name: "Kafka", icon: SiApachekafka, color: "text-purple-600" },
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "Go", icon: SiGo, color: "text-cyan-500" },
  { name: "Java", icon: SiJava, color: "text-red-500" },
  { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
  { name: "Django", icon: SiDjango, color: "text-green-600" },
]

export default function AlsoExplored() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
        Also Explored
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        {exploredTech.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="w-24"
          >
            <Card className="hover:shadow-lg hover:scale-105 transition-transform rounded-2xl">
              <CardContent className="flex flex-col items-center py-6">
                <tech.icon className={`text-4xl mb-2 ${tech.color}`} />
                <p className="text-sm font-medium">{tech.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
