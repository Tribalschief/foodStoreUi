import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 hover:scale-110"
        />
        <Badge className="absolute top-2 right-2 bg-leaf-600 hover:bg-leaf-700">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-bark-800">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-leaf-700">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{product.stock} in stock</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-leaf-50">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-bark-600 hover:bg-bark-700 text-white transition-colors duration-300"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

