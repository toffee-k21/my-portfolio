"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Cloud, Globe, Blocks } from "lucide-react"
import { useAppContext } from "@/utils/Context"
import SteakChartGithub from "./streak-chart-github"

const projects = [
  {
    id: 1,
    title: "NFTorium",
    description:
      "NFTorium is your gateway to the world of digital art and collectibles! Built on the Sepolia Ethereum Testnet, NFTorium is a decentralized marketplace where users can mint, buy, sell, and trade NFTs effortlessly",
    image: "/nftorium.png",
    tags: ["Ethereum", "IPFS", "React", "Solidity", "Ethers.js"],
    category: "Blockchain",
    icon: Blocks,
    liveUrl: "https://nftorium-toffee-k21s-projects.vercel.app/",
    githubUrl: "https://github.com/toffee-k21/NFTorium",
  },
  {
    id: 2,
    title: "Trimly",
    description: "A simple URL shortener web app built with Node.js, Express, MongoDB, and EJS. Users can paste long URLs to instantly generate short links, view previously created links, and track their usage history",
    image: "/trimly.png",
    tags: ["Express", "Node.js", "MongoDB", "EJS"],
    category: "Web",
    icon: Globe,
    liveUrl: "#",
    githubUrl: "https://github.com/toffee-k21/urlShortner",
  },
  {
    id: 3,
    title: "Anonymous Space",
    description: "A privacy-first anonymous posting app where users can share thoughts without sign-ups or personal data. Posts are AI-moderated in real time to block harmful or offensive content, ensuring a safe and secure community space.",
    image: "/anonymous-space.png",
    tags: ["Next", "Express", "GraphQL", "Postgres"],
    category: "Web",
    icon: Globe,
    liveUrl: "#",
    githubUrl: "https://github.com/toffee-k21/brain-server",
  },
  {
    id: 4,
    title: "Herbchain",
    description: "HerbChain is a blockchain platform that brings transparency, traceability, and authenticity to the medicinal herb supply chain, tracking every stage from cultivation to distribution",
    image: "/herbchain.jpg",
    tags: ["Ethereum", "IPFS", "Nextjs", "Solidity"],
    category: "Blockchain",
    icon: Blocks,
    liveUrl: "https://herbchain.vercel.app/",
    githubUrl: "https://github.com/toffee-k21/HerbChain-SIH25",
  },
  {
    id: 5,
    title: "R³ – Reduce. Reuse. Recycle.",
    description: "A sustainable marketplace to buy, sell, or donate items with real-time chat and a Community Exchange section",
    image: "/rCube.png",
    tags: ["Socket.io", "Express", "React", "MongoDB"],
    category: "Web",
    icon: Globe,
    liveUrl: "#",
    githubUrl: "https://github.com/toffee-k21/r3",
  },
  {
    id: 6,
    title: "Real-time Chat App",
    description: "Scalable chat application with WebSocket connections, message encryption, and file sharing.",
    image: "/modern-chat-application-interface-with-message-bub.jpg",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Web",
    icon: Globe,
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Cloud", "Web", "Blockchain"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const {github} = useAppContext();

const weeks = github?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Building and showcasing dynamic web and blockchain-enabled applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-full">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
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
    <SteakChartGithub weeks={weeks}/>
    </>
  )
}
