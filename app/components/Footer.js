// app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-16">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <p className="text-gray-600 text-sm">
          © 2025 Awais Iftikhar. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-3">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
          {/* Optional: Add more social links like Twitter, Email, etc. */}
        </div>
      </div>
    </footer>
  );
}
