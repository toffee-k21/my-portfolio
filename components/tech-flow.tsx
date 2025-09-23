"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import reactLogo from "../public/react.png"
import nodeLogo from "../public/nodejs.png"
import tsLogo from "../public/typescript.png"
import jsLogo from "../public/javascript-logo.png"
import rediLogo from "../public/redis-logo.png"
import mongoLogo from "../public/mongo.png"
import postgreLogo from "../public/postgre.png"
import ethLogo from "../public/ethereum-eth-logo.png"
import expressLogo from "../public/express-logo.png"
import ejsLogo from "../public/ejs-logo.png"
import solidityLogo from "../public/solodity-log0.png"
import metamaskLogo from "../public/metamask-logo.svg";
import tailwindLogo from "../public/tailwind-logo.png";
import awsLogo from "../public/aws.png"
import nextLogo from "../public/nextjs.png"
import cppLogo from "../public/cpp.png"
import pythonLogo from "../public/python.png"
import dockerLogo from "../public/docker.svg"
import linux from "../public/linux-2025130_1280.png"
import ec2Logo from "../public/ec2.png"
import golang from "../public/golang.png"
import graphql from "../public/graphql.png"
import nginx from "../public/NGINX_idJbB1HWfv_1.png"

interface FloatingLogo {
  id: number
  src: any
  alt: string
  left: number
  bottom: number
  speed: number
  laneWidth: number
}

const lane1 = [
  { src: reactLogo, alt: "React" },
  { src: nodeLogo, alt: "Node.js" },
  { src: tsLogo, alt: "TypeScript" },
  { src: solidityLogo, alt: "Solidity" },
  { src: ejsLogo, alt: "EJS" },
  { src: cppLogo, alt: "c++" },
  { src: ec2Logo, alt: "EC2" },
  { src: golang, alt: "golang" },
]

const lane2 = [
  { src: jsLogo, alt: "JavaScript" },
  { src: awsLogo, alt: "AWS" },
  { src: rediLogo, alt: "Redis" },
  { src: metamaskLogo, alt: "MetaMask" },
  { src: tailwindLogo, alt: "Tailwind" },
  { src: dockerLogo, alt: "docker" },
  { src: nginx, alt: "nginx" },
]

const lane3 = [
  { src: mongoLogo, alt: "MongoDB" },
  { src: postgreLogo, alt: "PostgreSQL" },
  { src: expressLogo, alt: "Express" },
  { src: nextLogo, alt: "next" },
  { src: ethLogo, alt: "Ethereum" },
  { src: pythonLogo, alt: "py" },
  { src: linux, alt: "linux" },
  { src: graphql, alt: "graphql" },
]

export default function TechFlow() {
  const [logos, setLogos] = useState<FloatingLogo[]>([])

  useEffect(() => {
    const generated: FloatingLogo[] = []
    const gap = 150 // horizontal gap
    let idCounter = 0
    const commonSpeed = 0.6 // same speed for all lanes

    const lanes = [
      { logos: lane1, bottom: 20, startOffset: 0 },
      { logos: lane2, bottom: 50, startOffset: 100 },
      { logos: lane3, bottom: 80, startOffset: 200 },
    ]

    lanes.forEach((lane) => {
      const repetitions = 6
      const laneLength = lane.logos.length
      const laneWidth = laneLength * gap * repetitions

      for (let r = 0; r < repetitions; r++) {
        lane.logos.forEach((logo, index) => {
          generated.push({
            id: idCounter++,
            src: logo.src,
            alt: logo.alt,
            left: lane.startOffset + (r * laneLength + index) * gap,
            bottom: lane.bottom,
            speed: commonSpeed,
            laneWidth,
          })
        })
      }
    })

    setLogos(generated)
  }, [])

  useEffect(() => {
    let animationFrame: number
    const animate = () => {
      setLogos((prev) =>
        prev.map((logo) => {
          let newLeft = logo.left + logo.speed
          if (newLeft > logo.laneWidth) newLeft = -150
          return { ...logo, left: newLeft }
        })
      )
      animationFrame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 w-full h-44 overflow-hidden pointer-events-none">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="absolute opacity-90"
          style={{
            left: `${logo.left}px`,
            bottom: `${logo.bottom}px`,
          }}
          title={logo.alt}
        >
          <Image src={logo.src} alt={logo.alt} width={40} height={40} />
        </div>
      ))}
    </div>
  )
}
