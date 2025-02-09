import Link from "next/link"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-leaf-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-leaf-800">
          Bird Food Emporium
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-leaf-700 hover:text-leaf-900">
            Home
          </Link>
          <Link href="/shop" className="text-leaf-700 hover:text-leaf-900">
            Shop
          </Link>
          <Link href="/collections" className="text-leaf-700 hover:text-leaf-900">
            Collections
          </Link>
          <Link href="/about" className="text-leaf-700 hover:text-leaf-900">
            About
          </Link>
          <Link href="/contact" className="text-leaf-700 hover:text-leaf-900">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-leaf-300 rounded-full focus:outline-none focus:ring-2 focus:ring-leaf-500 bg-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-leaf-400" size={20} />
          </div>
          <Button className="bg-bark-600 hover:bg-bark-700 text-white">
            <ShoppingCart size={20} className="mr-2" />
            <span className="hidden md:inline">Cart</span>
          </Button>
          <Button className="md:hidden bg-leaf-600 hover:bg-leaf-700 text-white">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}

