import Header from "../components/Header"
import Carousel from "../components/Carousel"
import ProductCollection from "@/components/ProductCollection"
import BirdFoodStore from "@/components/BirdFoodStore"
import BirdFeedingGuide from "@/components/BirdFeedingGuide"
import Footer from "@/components/Footer"
import p1 from "@/public/P1.jpg"
import p2 from "@/public/P2.jpg"
import p3 from "@/public/P3.jpg"
import p4 from "@/public/P4.jpg"

const collections = [
  { id: 1, name: "Seed Mixes", image: p1.src, link: "/collections/seed-mixes" },
  {
    id: 2,
    name: "Suet & Fat Balls",
    image: p2.src,
    link: "/collections/suet-fat-balls",
  },
  { id: 3, name: "Nuts & Berries", image: p3.src, link: "/collections/nuts-berries" },
  {
    id: 4,
    name: "Mealworms & Insects",
    image: p4.src,
    link: "/collections/mealworms-insects",
  },
]

const vitamins = [
  {
    id: 1,
    name: "Multivitamin Supplement",
    image: "/placeholder.svg?height=300&width=400",
    link: "/vitamins/multivitamin",
  },
  { id: 2, name: "Calcium Boost", image: "/placeholder.svg?height=300&width=400", link: "/vitamins/calcium" },
  {
    id: 3,
    name: "Feather Care Formula",
    image: "/placeholder.svg?height=300&width=400",
    link: "/vitamins/feather-care",
  },
  {
    id: 4,
    name: "Immune Support Blend",
    image: "/placeholder.svg?height=300&width=400",
    link: "/vitamins/immune-support",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-leaf-50">
      <Header />
      <Carousel />
       <ProductCollection title="Shop by Collection" items={collections} />
       <BirdFeedingGuide />
      <BirdFoodStore />
      <ProductCollection title="Bird Vitamins & Supplements" items={vitamins} />
      <Footer /> 
    </main>
  )
}

