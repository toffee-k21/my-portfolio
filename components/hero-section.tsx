"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Book } from "lucide-react"
import githubLogo from "../public/icons/github.jpg"
import leetCodeLogo from "../public/icons/leetcode.png"
import profilePic from "../public/profile.jpeg"
import { useAppContext } from "@/utils/Context"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [leetcodeSolved, setLeetcodeSolved] = useState(0)
  const [gfgSolved, setGfgSolved] = useState(0)
  const [contributions, setContributions] = useState(0)

  const { setLeetcode, setGithub, setGfg, leetcode } = useAppContext()

  const fullText =
    "Full-stack developer creating scalable Cloud, Web & Blockchain solutions with strong DSA skills"

  // typing effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  // fetch stats
  useEffect(() => {
    const fetchAndSetData = async () => {
      const res = await fetch("https://leetcode-stats-api.herokuapp.com/tfq21");
      const resBadge = await fetch("https://alfa-leetcode-api.onrender.com/tfq21/badges");
      const data = await res.json();
      const dataBadge = await resBadge.json();
      const inBadge = dataBadge.badges;
      data["badges"] = inBadge;
      console.log(data);
      setLeetcode(data);
      const totalSolved = data.totalSolved
      const leetTimer = setInterval(() => {
        setLeetcodeSolved((prev) =>
          prev < totalSolved ? prev + 7 : totalSolved
        )
      }, 40)
      return () => clearInterval(leetTimer)
    }
    fetchAndSetData()

    const GFGfetchAndSetData = async () => {
      const res = await fetch(`/api/gfg?username=taufiq2fjol`)
      const data = await res.json()
      setGfg(data)
      const totalSolved = data.info.totalProblemsSolved
      const gfgTimer = setInterval(() => {
        setGfgSolved((prev) =>
          prev < totalSolved ? prev + 7 : totalSolved
        )
      }, 40)
      return () => clearInterval(gfgTimer)
    }
    GFGfetchAndSetData()

    const fetchAndSetDataGithub = async () => {
      const res = await fetch("/api/github")
      const data = await res.json()
      setGithub(data)
      const totalContributions =
        data?.data?.user?.contributionsCollection?.contributionCalendar
          ?.totalContributions
      const timer = setInterval(() => {
        setContributions((prev) =>
          prev < totalContributions ? prev + 7 : totalContributions
        )
      }, 40)
      return () => clearInterval(timer)
    }
    fetchAndSetDataGithub()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 py-12 sm:py-16"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left: Profile Card */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <div className="rounded-2xl p-6 max-w-xs sm:max-w-sm mx-auto text-center">
            <Image
              src={profilePic}
              alt="Profile"
              width={140}
              height={140}
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Taufiq Hassan
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              Full-stack Developer
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <a href="https://github.com/toffee-k21" target="_blank">
                <div className="p-2 rounded-md bg-card hover:scale-110 transition">
                  <Github className="h-5 w-5 text-foreground" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/taufiq-hassan-311221295"
                target="_blank"
              >
                <div className="p-2 rounded-md bg-card hover:scale-110 transition">
                  <Linkedin className="h-5 w-5 text-foreground" />
                </div>
              </a>
              <a href="mailto:taufiq@example.com" target="_blank">
                <div className="p-2 rounded-md bg-card hover:scale-110 transition">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
              </a>
              <a href="https://leetcode.com/tfq21" target="_blank">
                <div className="p-2 rounded-md bg-card hover:scale-110 transition">
                  <Book className="h-5 w-5 text-foreground" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <motion.div
          className="hidden lg:block w-px bg-gray-300 self-stretch"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>

        {/* Right: Main Content */}
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Hi, I’m <span className="text-primary">Taufiq Hassan</span>
          </h1>

          {/* Typing Text */}
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-6 min-h-[3.5rem]">
            {typedText}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10">
            <Button size="lg" className="px-6 sm:px-8 py-3">
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="px-6 sm:px-8 py-3"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1gz37EBYkmAxUs7XlTQXq9HPy95p32f1v/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>

       
        {/* Stats Container */}
        <div className="flex flex-col lg:flex-row gap-12 justify-start mt-8 w-full max-w-2xl mx-auto">

          {/* Left Column: Problem Solved & GitHub Contributions */}
          <div className="flex flex-col gap-4">
            {/* Problem Solved Card */}
            <a
              href="https://codolio.com/profile/Taufiq"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card rounded-xl shadow-md hover:scale-105 transition-transform w-72 flex items-center gap-4"
            >
              <Image
                src={leetCodeLogo}
                alt="LeetCode Logo"
                width={48}
                height={48}
                className="rounded"
              />
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{leetcodeSolved + gfgSolved}+</div>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </div>
            </a>

            {/* GitHub Contributions Card */}
            <a
              href="https://github.com/toffee-k21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card rounded-xl shadow-md hover:scale-105 transition-transform w-72 flex items-center gap-4"
            >
              <Image
                src={githubLogo}
                alt="GitHub Logo"
                width={48}
                height={48}
                className="rounded"
              />
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{contributions}</div>
                <p className="text-sm text-muted-foreground">GitHub Contributions</p>
              </div>
            </a>
          </div>

          {/* Right Column: Badges */}
          <div className="flex flex-wrap gap-3 items-start">
            {leetcode?.badges?.map((badge: any, index: number) => (
              <Image
                key={index}
                src={badge.icon}
                alt={badge.name || "LeetCode Badge"}
                width={70} // bigger
                height={70} // bigger
              />
            ))}
          </div>
        </div>

        </motion.div>
      </div>
    </section>
  )
}
