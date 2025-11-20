export default function ProjectsPage() {
  return (
    <main className="container mx-auto p-8 space-y-16">
      {/* ============ Page Heading ============ */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          These are the projects I’ve built during my BS in AI journey at GIKI
          and during my self-learning. Each project helped me improve my logic,
          problem-solving and development skills.
        </p>
      </section>

      {/* ============ Project Cards ============ */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Casino Games */}
        <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            🎰 Casino Game Collection
          </h2>
          <p className="text-gray-700 mb-3">
            A set of 4 interactive casino games created in my first semester.
            Built using C++ fundamentals like loops, conditions and functions.
          </p>
          <p className="text-sm text-gray-500">Technologies: C++</p>
        </div>

        {/* Smart Eco City */}
        <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            🏙️ Smart Eco City Simulation
          </h2>
          <p className="text-gray-700 mb-3">
            A city simulation system built in semester 2 focusing on
            environment-friendly decisions. Involves classes, objects,
            eco-points and logical modeling.
          </p>
          <p className="text-sm text-gray-500">Technologies: C++ (OOP)</p>
        </div>

        {/* Movie Recommendation */}
        <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            🎬 Movie Recommendation System
          </h2>
          <p className="text-gray-700 mb-3">
            A recommendation system built using a Kaggle movie dataset. Applying
            DSA concepts, sorting, searching and data handling.
          </p>
          <p className="text-sm text-gray-500">
            Technologies: C++, DSA, Kaggle Dataset
          </p>
        </div>

        {/* Portfolio */}
        <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            🌐 Portfolio Website
          </h2>
          <p className="text-gray-700 mb-3">
            A modern and responsive personal portfolio built with Next.js and
            Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500">
            Technologies: Next.js, React, TailwindCSS
          </p>
        </div>

        {/* Loan App */}
        <div className="bg-white rounded-xl shadow-lg border p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            💰 Bank Loan App
          </h2>
          <p className="text-gray-700 mb-3">
            Small practice project for loan eligibility and loan record
            management.
          </p>
          <p className="text-sm text-gray-500">
            Technologies: React, JavaScript
          </p>
        </div>
      </section>
    </main>
  );
}
