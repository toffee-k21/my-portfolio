"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Blocks, Coins, Shield, Zap } from "lucide-react"

const blockchainFeatures = [
  {
    icon: Blocks,
    title: "Smart Contracts",
    description: "Secure, audited smart contracts for DeFi, NFTs, and DAOs",
    technologies: ["Solidity", "Hardhat", "OpenZeppelin"],
  },
  {
    icon: Coins,
    title: "DeFi Protocols",
    description: "Decentralized finance solutions with yield farming and staking",
    technologies: ["Uniswap", "Compound", "Aave"],
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security analysis and vulnerability assessment",
    technologies: ["Mythril", "Slither", "Echidna"],
  },
  {
    icon: Zap,
    title: "Layer 2 Solutions",
    description: "Scalable blockchain applications with reduced gas fees",
    technologies: ["Polygon", "Arbitrum", "Optimism"],
  },
]

export function BlockchainSection() {
  return (
    <section
      id="blockchain"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-16 h-16 border-2 border-primary rotate-45" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-12 border-2 border-accent rotate-12" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-10" style={{ animationDelay: "2s" }}>
          <div className="w-20 h-20 border-2 border-primary/50 rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Blocks className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Blockchain Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building the decentralized future with secure smart contracts, DeFi protocols, and innovative blockchain
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blockchainFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {feature.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build on Blockchain?</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                From concept to deployment, I help businesses leverage blockchain technology to create transparent,
                secure, and decentralized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="animate-glow">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Blockchain Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
