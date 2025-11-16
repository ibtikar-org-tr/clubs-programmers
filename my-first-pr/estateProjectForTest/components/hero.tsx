export default function Hero() {
  return (
    <section className="relative h-96 md:h-[450px] overflow-hidden">
      {/* Background Image */}
      <img src="/modern-house-by-lake-forest-landscape.jpg" alt="Hero property" className="w-full h-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Red House Istanbul</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-pretty">
          Experience luxury living with breathtaking lake and forest views. This stunning property offers modern
          amenities and timeless elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="text-3xl font-bold text-yellow-300">$99.9</div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
            View Property
          </button>
        </div>
      </div>
    </section>
  )
}
