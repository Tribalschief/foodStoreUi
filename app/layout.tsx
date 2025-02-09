import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bird Food Emporium | Premium Bird Food and Supplies",
  description:
    "Discover a wide range of high-quality bird food and supplies for all types of birds. From seeds to suet, we have everything to keep your feathered friends happy and healthy.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-leaf-50`}>{children}</body>
    </html>
  )
}
