"use client"

import PropertyCard from "./property-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    price: 850000,
    image: "/modern-luxury-apartment.png",
    description: "Spacious 2-bedroom apartment with floor-to-ceiling windows and premium finishes.",
  },
  {
    id: 2,
    title: "Executive Office",
    price: 1200000,
    image: "/modern-office-space-downtown-building.jpg",
    description: "Prime downtown office space with stunning city views and professional amenities.",
  },
  {
    id: 3,
    title: "Classic Home",
    price: 950000,
    image: "/beautiful-residential-house-exterior.jpg",
    description: "4-bedroom family home with large backyard, perfect for growing families.",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Latest & Featured Properties</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-pretty">
            Get started by choosing from one of our pre-built page templates to showcase your properties
          </p>
        </div>

        {/* Properties Grid with Slider Controls */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Slider Arrows (Static for now) */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-full transition">
              <ChevronLeft size={24} />
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-full transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
