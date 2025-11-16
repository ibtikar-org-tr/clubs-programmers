import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SearchBar from "@/components/search-bar"
import FeaturedProperties from "@/components/featured-properties"

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <SearchBar />
      <Hero />
      <FeaturedProperties />
    </main>
  )
}
