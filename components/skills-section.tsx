"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cloud, Globe, Blocks } from "lucide-react"

const skillCategories = [
  {
    title: "Problem Solving / DSA",
    icon: Brain,
    color: "text-blue-500",
    skills: [
      "Arrays & Strings",
      "Trees & Graphs",
      "Dynamic Programming",
      "Sorting & Searching",
      "Recursion",
      "Greedy Algorithms",
    ],
    description: "300+ LeetCode problems solved",
    anecdote: "Solved 47 problems in my current streak!",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-500",
    skills: ["AWS EC2", "Docker", "Linux", "Redis", "CI/CD", "Kubernetes"],
    description: "Building scalable cloud infrastructure",
    anecdote: "Deployed 15+ production applications on AWS",
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "text-green-500",
    skills: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "TypeScript"],
    description: "Full-stack MERN applications with modern frameworks",
    anecdote: "Built SEO-optimized Next.js apps with 95+ Lighthouse scores",
  },
  {
    title: "Blockchain",
    icon: Blocks,
    color: "text-purple-500",
    skills: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts", "DeFi", "NFTs"],
    description: "Advanced Ethereum blockchain development",
    anecdote: "Deployed smart contracts handling $50K+ in transactions",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building expertise across problem-solving, cloud infrastructure, and modern development while preparing for
            top product companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-2 text-sm">{category.description}</p>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <p className="text-primary text-sm font-medium italic">💡 {category.anecdote}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
