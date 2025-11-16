interface PropertyCardProps {
  id: number
  title: string
  price: number
  image: string
  description: string
}

export default function PropertyCard({ title, price, image, description }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden flex flex-col h-full">
      {/* Property Image */}
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Price */}
        <div className="text-blue-600 font-bold text-xl mb-2">${price.toLocaleString()}</div>

        {/* Title */}
        <h3 className="font-bold text-lg mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm flex-1">{description}</p>

        {/* Learn More Button */}
        <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition">Learn More →</button>
      </div>
    </div>
  )
}
