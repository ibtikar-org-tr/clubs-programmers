import { Phone, LogIn } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-red-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">MyEstate</div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex gap-8 items-center justify-center flex-1">
          <a href="#" className="hover:text-blue-200 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Property
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Blog
          </a>
          <a href="#" className="hover:text-blue-200 transition">
            Contact
          </a>
        </div>

        {/* Right side - Phone and Sign In */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Phone size={18} />
            <span className="text-sm">(555) 123-4567</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2">
            <LogIn size={18} />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
