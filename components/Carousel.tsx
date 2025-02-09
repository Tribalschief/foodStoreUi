"use client"
import p1 from "@/public/P1.jpg"
import p2 from "@/public/P2.jpg"
import p3 from "@/public/P3.jpg"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    image: p1.src,
    alt: "Premium Bird Food",
    title: "Premium Bird Food",
    description: "Nourish your feathered friends with our high-quality seeds",
  },
  {
    id: 2,
    image: p2.src,
    alt: "Bird Feeders",
    title: "Stylish Bird Feeders",
    description: "Attract a variety of birds with our elegant feeder collection",
  },
  {
    id: 3,
    image: p3.src,
    alt: "Bird Baths",
    title: "Refreshing Bird Baths",
    description: "Provide a sanctuary for birds with our beautiful baths",
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-leaf-50">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={item.image || "/placeholder.svg"} alt={item.alt} fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-bark-900 bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all text-leaf-800"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all text-leaf-800"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

