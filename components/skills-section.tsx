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
    icons: ["/icons/tailwind.png", "/icons/javascript.png", "/icons/typescript.png"],
    anecdote: "First steps into frontend dev 🚀",
  },
  {
    date: "Nov 2023",
    title: "Backend Development",
    description: "Built REST APIs and server-side logic.",
    skills: ["Node.js", "Express.js", "mongoDB", "Nginx", "EJS", "Postgres"],
    icons: ["/icons/nodejs.png", "/icons/express.png", "/icons/mongo.png", "/icons/nginx.png", "/icons/ejs.png", "/icons/postgre.png"],
    anecdote: "Built my first CRUD app",
  },
  {
    date: "Jan 2024",
    title: "Modern Frontend",
    description: "Learned React & Next.js for building scalable apps.",
    skills: ["React", "Next.js","Redux", "GraphQl"],
    icons: ["/icons/react.png", "/icons/nextjs.png", "/icons/redux.png", "/icons/graphql.png"],
    anecdote: "Created SEO-optimized apps with Next.js",
  },
  {
    date: "Apr 2024",
    title: "Blockchain Development",
    description: "Explored blockchain concepts and smart contracts.",
    skills: ["Ethereum", "Solidity", "Ethers.js", "Crypto-Wallet", "Remix IDE", "Hardhat"],
    icons: ["/icons/ethereum.png", "/icons/solidity.png","/icons/ethers.png", "/icons/metamask.svg", "/icons/remix.png", "/icons/hardhat.png"],
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
    icons: ["/icons/linux.png", "/icons/docker.svg", "/icons/redis.png", "/icons/github.jpg"],
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

const alsoExplored = [
  { name: "Kafka", icon: "/icons/kafka.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "Golang", icon: "/icons/golang.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Svelte", icon: "/icons/svelte.png" },
  { name: "Django", icon: "/icons/django.png" },
]

function TimelineCard({ item, index, isInView }: any) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      className="group relative flex flex-col lg:flex-row items-stretch mb-10 lg:mb-12 p-6 rounded-xl bg-card border border-border/40 shadow-sm hover:shadow-xl hover:border-primary/60 transition-all duration-300"
    >
      {/* Left Section - Content */}
      <div className="lg:w-2/5 w-full pr-0 lg:pr-6 flex flex-col justify-center mb-6 lg:mb-0">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">{item.description}</p>

        {/* Anecdote */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          <p className="text-primary text-sm italic">💡 {item.anecdote}</p>
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills.map((skill: any) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Middle Section - Icons */}
      <div className="lg:w-2/5 w-full grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center mb-6 lg:mb-0">
        {item.icons.map((icon: any, idx: any) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="relative w-10 h-10 sm:w-12 sm:h-12"
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
      <div className="lg:w-1/5 w-full flex lg:items-center lg:justify-end">
        <span className="px-3 py-1 text-xs sm:text-sm rounded-md bg-primary/10 text-primary font-medium shadow-sm">
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
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            This is just the first 1% of my journey — a glimpse of the technologies and problem-solving skills I’ve explored so far. The remaining 99% is yet to unfold, driven by my curiosity, passion for coding, and relentless enthusiasm to keep learning and building.
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

        {/* Also Explored Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Also Explored
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            {alsoExplored.map((tech, i) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {/* {tech.name} */}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
