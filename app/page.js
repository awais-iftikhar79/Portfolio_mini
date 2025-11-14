export default function Home() {
  return (
    <main className="bg-gray-50 p-8 space-y-16">

      {/* ================= Hero Section ================= */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Hi, I’m Awais 👋
        </h1>
        <p className="text-xl text-gray-600">
          A passionate learner exploring Web Development, React, and Next.js 🚀
        </p>
      </section>

      {/* ================= About Me Section ================= */}
      <section className="bg-white py-16 px-6 rounded-xl shadow-lg border">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          About Me
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          I am Awais, an enthusiastic learner who is exploring web development.
          I love working with Next.js, React, TailwindCSS, and modern UI designs.
          My main goal is to build beautiful and efficient web applications while 
          improving my skills every day.
        </p>
      </section>

      {/* ================= Skills Section ================= */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">HTML</h3>
            <p className="text-gray-600">Markup language for building web pages</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">CSS / Tailwind</h3>
            <p className="text-gray-600">Design beautiful layouts with TailwindCSS</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">JavaScript / React</h3>
            <p className="text-gray-600">Dynamic web apps with React & Next.js</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Git & GitHub</h3>
            <p className="text-gray-600">Version control and collaboration</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Node.js</h3>
            <p className="text-gray-600">Backend basics & server-side logic</p>
          </div>
        </div>
      </section>

      {/* ================= Projects Section ================= */}
      <section className="py-16 px-6 bg-gray-50 rounded-xl shadow-lg border">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Portfolio Website</h3>
            <p className="text-gray-600">My personal portfolio built with Next.js & TailwindCSS.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Bank Loan App</h3>
            <p className="text-gray-600">A web app project for managing loan requests.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-lg border text-center">
            <h3 className="font-bold mb-2 text-gray-900">Other Project</h3>
            <p className="text-gray-600">Another project showcasing skills and UI design.</p>
          </div>
        </div>
      </section>

      {/* ================= Contact Section ================= */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Contact Me
        </h2>

        <form className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded shadow-sm bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded shadow-sm bg-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded shadow-sm bg-white"
            rows={5}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}
