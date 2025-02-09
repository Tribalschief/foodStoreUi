"use client"

import { useState, useEffect } from "react"
import type { Product, CartItem } from "../types/product"
import { products } from "@/data/products"
import ProductCard from "./ProductCard"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"


export default function BirdFoodStore() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [category, setCategory] = useState<string>("All")
  const [sortBy, setSortBy] = useState<string>("name")

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredAndSortedProducts = products
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      return 0
    })

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <section className="py-12 bg-leaf-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-bark-800">Our Products</h2>
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full sm:w-auto">
            <Label htmlFor="category" className="mr-2 text-bark-700">
              Category:
            </Label>
            <Select aria-label="category" value={category} onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
                
              ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-auto">
            <Label htmlFor="sortBy" className="mr-2 text-bark-700">
              Sort by:
            </Label>
            <Select aria-label="sortBy" value={sortBy} onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
              <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

