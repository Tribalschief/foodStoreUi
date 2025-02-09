import Image from "next/image"
import Link from "next/link"

interface CollectionItem {
  id: number
  name: string
  image: string
  link: string
}

interface ProductCollectionProps {
  title: string
  items: CollectionItem[]
}

export default function ProductCollection({ title, items }: ProductCollectionProps) {
  return (
    <section className="py-12 bg-leaf-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-bark-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bark-900 bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

