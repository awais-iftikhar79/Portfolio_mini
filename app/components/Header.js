// app/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-lg p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <h1 className="text-2xl font-semibold text-gray-800">Awais Iftikhar</h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
