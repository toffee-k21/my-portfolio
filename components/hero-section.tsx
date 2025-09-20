"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Trophy, Target, GitMergeIcon,  } from "lucide-react"
import githubLogo from "../public/github-logo.jpg"
import leetCodeLogo from "../public/leetcode-logo.png"
import { useAppContext } from "@/utils/Context"
import Image from "next/image"
import TechFlow from "./tech-flow"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [problemsSolved, setProblemsSolved] = useState(0)
  const [contibutions, setContibutions] = useState(0);

  const {leetcode, setLeetcode, setGithub, gfg, setGfg} = useAppContext();
  const fullText = "Full-stack developer creating scalable Cloud, Web & Blockchain solutions with strong DSA skills"

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
    //leetcode
    const fetchAndSetData = async () => {
      const res = await fetch('https://leetcode-stats-api.herokuapp.com/tfq21');
      const data = await res.json();
      setLeetcode(data);
      const totalSolved = data.totalSolved;
      const timer = setInterval(() => {
        setProblemsSolved((prev) => {
          if (prev < totalSolved) return prev + 7
          return totalSolved;
        })
      }, 50)

      return () => clearInterval(timer);
    }
    // fetchAndSetData();

    //gfg
    const GFGfetchAndSetData = async () => {
      const res = await fetch(``);
      const data = await res.json();
      setGfg(data);
      console.log(data);
    }
    // GFGfetchAndSetData();

    //github
    const fetchAndSetDataGithub = async () => {
      const res = await fetch('/api/github');
      const data = await res.json();
      setGithub(data);
      const totalContributions = data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions;
      const timer = setInterval(() => {
        setContibutions((prev) => {
          if (prev < totalContributions) return prev + 7
          return totalContributions;
        })
      }, 50)
      return () => clearInterval(timer);
    }

    // fetchAndSetDataGithub();
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-36">
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text">
              Taufiq Hassan
            </span>
          </h1>

          <div className="text-lg sm:text-lg lg:text-xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
            <span className="font-mono border-r-2 border-primary pr-1">{typedText}</span>
          </div>

          <div className="mb-8 p-6 bg-card rounded-lg border border-border max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              {/* LeetCode Card */}
    <a 
      href="https://leetcode.com/tfq21" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center hover:scale-105 transition-transform"
    >
      <div className="m-1">
        <Image src={leetCodeLogo} alt="LeetCode Logo" width={50} height={50} />
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">{problemsSolved}</div>
        <div className="text-sm text-muted-foreground">Problems Solved</div>
        <div className="text-sm opacity-50 text-muted-foreground">on LeetCode</div>
      </div>
    </a>

    {/* GitHub Card */}
    <a 
      href="https://github.com/toffee-k21" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center hover:scale-105 transition-transform"
    >
      <div className="m-1">
        <Image src={githubLogo} alt="GitHub Logo" width={42} height={42} />
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">{contibutions}</div>
        <div className="text-sm text-muted-foreground">GitHub Contributions</div>
        <div className="text-sm opacity-50 text-muted-foreground">last 12 months</div>
      </div>
    </a>

            </div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          {/* Building scalable solutions at the intersection of Cloud/DevOps, Web Development, and Blockchain while strengthening my problem-solving skills on LeetCode, CodeChef, and GeeksforGeeks */}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://drive.google.com/file/d/1gz37EBYkmAxUs7XlTQXq9HPy95p32f1v/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="animate-glow text-lg px-8 py-3">
                View Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
      <TechFlow />
      </div>
    </section>
  )
}
