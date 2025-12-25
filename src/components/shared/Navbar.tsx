import Link from "next/link";
import { Button } from "@/components/ui/button";

// Navbar component for site-wide navigation

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-2xl tracking-tight flex items-center gap-1">
          KASPARRO<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
          <Link
            href="/platform"
            className="hover:text-blue-600 transition-colors duration-200 cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
          >
            Platform
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors duration-200 cursor-pointer relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all"
          >
            About
          </Link>
        </div>

        {/* Enter App Button */}
        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors duration-200"
        >
          <Link href="/app/dashboard">Enter App</Link>
        </Button>
      </div>
    </nav>
  );
}
