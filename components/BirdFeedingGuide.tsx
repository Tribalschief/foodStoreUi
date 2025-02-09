"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import p1 from "@/public/P1.jpg"
import p2 from "@/public/P2.jpg"
import p3 from "@/public/P3.jpg"
import p4 from "@/public/P4.jpg"
import p5 from "@/public/P5.jpg"

gsap.registerPlugin(ScrollTrigger)

const birds = [
  {
    id: 1,
    name: "Blue Jay",
    image: p1.src,
    foods: ["Peanuts", "Sunflower Seeds", "Corn"],
  },
  {
    id: 2,
    name: "Cardinal",
    image: p2.src,
    foods: ["Sunflower Seeds", "Safflower Seeds", "Berries"],
  },
  {
    id: 3,
    name: "Goldfinch",
    image: p3.src,
    foods: ["Nyjer Seeds", "Sunflower Hearts", "Thistle"],
  },
  {
    id: 4,
    name: "Hummingbird",
    image: p4.src,
    foods: ["Nectar", "Small Insects", "Tree Sap"],
  },
  { id: 5, name: "Woodpecker", image: p5.src, foods: ["Suet", "Peanuts", "Fruit"] },
]

export default function BirdFeedingGuide() {
  const [selectedBird, setSelectedBird] = useState(birds[0])
  const sectionRef = useRef<HTMLElement>(null)
  const birdGridRef = useRef<HTMLDivElement>(null)
  const birdInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && birdGridRef.current && birdInfoRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        birdGridRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: birdGridRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  useEffect(() => {
    if (birdInfoRef.current) {
      gsap.fromTo(birdInfoRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 })
    }
  }, [birdInfoRef]) //Removed unnecessary dependency: selectedBird

  const handleBirdClick = (bird: (typeof birds)[0]) => {
    setSelectedBird(bird)
    if (birdInfoRef.current) {
      gsap.fromTo(birdInfoRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 })
    }
  }

  return (
    <section ref={sectionRef} className="py-12 bg-sky-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-bark-800">Bird Feeding Guide</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div ref={birdGridRef} className="w-full md:w-1/2 grid grid-cols-3 gap-4">
            {birds.map((bird) => (
              <div
                key={bird.id}
                className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
                  selectedBird.id === bird.id ? "bg-leaf-100" : "bg-white hover:bg-leaf-50"
                }`}
                onClick={() => handleBirdClick(bird)}
              >
                <Image
                  src={bird.image || "/placeholder.svg"}
                  alt={bird.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-2 rounded-full"
                />
                <p className="text-center font-semibold text-bark-700">{bird.name}</p>
              </div>
            ))}
          </div>
          <div ref={birdInfoRef} className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-bark-800">{selectedBird.name}</h3>
            <Image
              src={selectedBird.image || "/placeholder.svg"}
              alt={selectedBird.name}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-lg"
            />
            <h4 className="text-xl font-semibold mb-2 text-leaf-700">Preferred Foods:</h4>
            <ul className="list-disc list-inside text-bark-600">
              {selectedBird.foods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Background pattern"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  )
}

