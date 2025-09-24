"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const skillTimeline = [
  {
    date: "Sept 2023",
    title: "Frontend Fundamentals",
    description: "Started building static websites with modern styling.",
    skills: ["HTML", "CSS", "JavaScript"],
    icons: [ "/icons/tailwind.png", "/icons/javascript.png", "/icons/typescript.png"],
    anecdote: "First steps into frontend dev 🚀",
  },
  {
    date: "Nov 2023",
    title: "Backend Development",
    description: "Built REST APIs and server-side logic.",
    skills: ["Node.js", "Express.js", "mongoDB", "Nginx", "EJS", "Postgres"],
    icons: ["/icons/nodejs.png", "/icons/express.png", "/icons/mongo.png", "/icons/nginx.png", "icons/ejs.png", "icons/postgre.png"],
    anecdote: "Built my first CRUD app",
  },
  {
    date: "Jan 2024",
    title: "Modern Frontend",
    description: "Learned React & Next.js for building scalable apps.",
    skills: ["React", "Next.js", "GraphQl"],
    icons: ["/icons/react.png", "/icons/nextjs.png", "/icons/graphql.png"],
    anecdote: "Created SEO-optimized apps with Next.js",
  },
  {
    date: "Apr 2024",
    title: "Blockchain Development",
    description: "Explored blockchain concepts and smart contracts.",
    skills: ["Ethereum", "Solidity", "Ethers.js"],
    icons: ["/icons/ethereum.png", "/icons/solidity.png", "/icons/metamask.svg"],
    anecdote: "Deployed smart contracts on Ethereum testnet",
  },
  {
    date: "June 2024",
    title: "Cloud Computing",
    description: "Worked with AWS cloud services.",
    skills: ["AWS EC2", "S3", "Lambda"],
    icons: ["/icons/aws.png", "/icons/ec2.png", "/icons/lambda.jpg"],
    anecdote: "Deployed scalable apps on the cloud",
  },
  {
    date: "Sept 2024",
    title: "DevOps & Open Source",
    description: "Practiced containerization & contributed to OSS.",
    skills: ["Linux", "Docker", "Redis", "Hacktoberfest", "AsyncAPI"],
    icons: ["/icons/linux.png", "/icons/docker.svg","/icons/redis.png", "/icons/github.jpg"],
    anecdote: "Made 4+ PRs in Next.js AsyncAPI",
  },
  {
    date: "Feb 2025",
    title: "Problem Solving",
    description: "Focused on DSA and competitive programming.",
    skills: ["DSA", "Algorithms", "LeetCode"],
    icons: ["/icons/cpp.png", "/icons/leetcode.png"],
    anecdote: "Solved 300+ LeetCode problems",
  },
]

function TimelineCard({ item, index, isInView }:any) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      className="group relative flex flex-row items-stretch mb-12 p-6 rounded-xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/60 transition-all duration-300"
    >
      {/* Left Section - Content */}
      <div className="w-2/5 pr-6 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>

        {/* Anecdote (visible on hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          <p className="text-primary text-sm italic">💡 {item.anecdote}</p>
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills.map((skill:any) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Middle Section - Icons (Criss-cross grid) */}
      <div className="w-2/5 grid grid-cols-3 gap-4 place-items-center">
        {item.icons.map((icon:any, idx:any) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="relative w-12 h-12"
          >
            <Image
              src={icon}
              alt={item.title}
              width={42}
              height={42}
              className="object-contain drop-shadow-md"
            />
          </motion.div>
        ))}
      </div>

      {/* Right Section - Date */}
      <div className="w-1/5 flex items-center justify-end">
        <span className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary font-medium shadow-sm">
          {item.date}
        </span>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This is just the first 1% of my journey — a glimpse of the technologies and problem-solving skills I’ve explored so far. The remaining 99% is yet to unfold, driven by my curiosity, passion for coding, and relentless enthusiasm to keep learning and building
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="flex flex-col">
          {skillTimeline.map((item, index) => (
            <TimelineCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
