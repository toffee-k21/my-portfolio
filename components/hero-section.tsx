"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Trophy, Target } from "lucide-react"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [problemsSolved, setProblemsSolved] = useState(0)
  const fullText = "a full-stack developer sharpening my DSA skills for top product companies"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProblemsSolved((prev) => {
        if (prev < 347) return prev + 7
        return 347
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Code className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Trophy className="h-6 w-6 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
          <Target className="h-10 w-10 text-primary/25" />
        </div>
        <div className="absolute top-60 right-10 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-4 h-4 bg-primary/20 rounded-full" />
        </div>
        <div className="absolute bottom-20 right-40 animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="w-6 h-6 bg-primary/15 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              [Your Name]
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="font-mono border-r-2 border-primary pr-1">{typedText}</span>
          </div>

          <div className="mb-8 p-6 bg-card rounded-lg border border-border max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Trophy className="h-8 w-8 text-primary" />
              <div>
                <div className="text-3xl font-bold text-primary">{problemsSolved}</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-foreground">47</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Building a career at the intersection of Cloud/DevOps, Web Development, and Blockchain. Practicing DSA daily
            on LeetCode, CodeChef, and GeeksforGeeks to land at top product companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="animate-glow text-lg px-8 py-3">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              See My Progress
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">347</div>
              <div className="text-muted-foreground">LeetCode Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">47</div>
              <div className="text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
