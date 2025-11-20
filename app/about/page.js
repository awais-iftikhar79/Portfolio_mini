// app/about/page.js
export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-12 space-y-16">
      {/* ================= Hero / Introduction ================= */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">About Me</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Hello! I’m Awais Iftikhar, a passionate AI student at GIKI exploring
          the world of programming, data structures, and web development. I
          enjoy learning new technologies, building projects, and applying my
          skills to real-world problems. My goal is to combine AI knowledge with
          web development to create interactive, efficient, and meaningful
          applications.
        </p>
      </section>

      {/* ================= Learning Journey / Projects ================= */}
      <section className="bg-white rounded-xl shadow-lg border p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">
          My Journey
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto text-gray-700">
          <p>
            <strong>1st Semester:</strong> Developed <em>4 casino games</em> to
            learn programming basics, randomness, and user interaction.
          </p>
          <p>
            <strong>2nd Semester:</strong> Built a{" "}
            <em>City Simulator System</em>, gaining experience in structured
            project design, multiple components, and problem-solving.
          </p>
          <p>
            <strong>3rd Semester (Current):</strong> Working on a{" "}
            <em>Movie Recommendation System</em> using a Kaggle dataset.
            Applying data structures and algorithms to manipulate, sort, and
            analyze movie data efficiently.
          </p>
        </div>
      </section>

      {/* ================= Skills & Tools ================= */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Programming</h3>
            <p className="text-gray-600">
              C++, Python, DSA, Algorithms, Problem Solving
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Data Science</h3>
            <p className="text-gray-600">
              NumPy, Pandas, Data Manipulation, Dataset Analysis
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Web Development</h3>
            <p className="text-gray-600">
              React, Next.js, TailwindCSS, DaisyUI, Responsive Design
            </p>
          </div>
        </div>
      </section>

      {/* ================= Goals & Vision ================= */}
      <section className="bg-gray-50 rounded-xl shadow-lg border p-8 space-y-4">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">
          My Goals
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          My vision is to grow as a full-stack web developer while leveraging my
          AI knowledge to build intelligent and interactive web applications. I
          aim to create projects that are not only functional but also
          aesthetically pleasing, efficient, and user-friendly. Side projects in
          web development allow me to practice, experiment, and earn while
          learning.
        </p>
      </section>

      {/* ================= Optional Personal Touch ================= */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Fun Fact</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          When I’m not coding, I love exploring AI research, gaming, and
          learning new technologies. My motto:{" "}
          <em>"Keep learning, keep building, keep growing."</em>
        </p>
      </section>
    </main>
  );
}
