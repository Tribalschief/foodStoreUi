import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-bark-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-leaf-300">Bird Food Emporium</h3>
            <p className="text-bark-300">Providing quality bird food and supplies since 2023.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-leaf-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-bark-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-bark-300 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-bark-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-bark-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-leaf-300">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-bark-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-bark-300 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-bark-300 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-bark-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-leaf-300">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-bark-300 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-bark-300 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-bark-300 hover:text-white">
                <Instagram />
              </a>
            </div>
            <p className="mt-4 text-bark-300">Subscribe to our newsletter for updates and special offers!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-bark-700 text-center text-bark-300">
          <p>&copy; 2023 Bird Food Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

