"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // Typing Animation
  const roles = [
    "AI Student",
    "DSA Learner",
    "Web Developer",
    "Python Enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const current = roles[roleIndex];

    const typing = setInterval(() => {
      setDisplayText(current.substring(0, i + 1));
      i++;

      if (i === current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 1500);
      }
    }, 120);

    return () => clearInterval(typing);
  }, [roleIndex]);

  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-200 p-8 space-y-20">
      {/* ================= Premium Hero Section ================= */}
      <section className="text-center py-24 animate-fadeIn">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-900 drop-shadow">
          Hi, I’m <span className="text-blue-600">Awais</span> 👋
        </h1>

        <p className="text-2xl text-gray-700 mt-4 font-medium h-10">
          {displayText} <span className="text-blue-600">|</span>
        </p>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
          BS Artificial Intelligence student at <strong>GIK Institute</strong>,
          building skills in AI, DSA, Python, and Full-Stack Web Development.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="/about"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            About Me
          </a>
          <a
            href="/projects"
            className="px-8 py-3 bg-gray-900 text-white rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            My Projects
          </a>
        </div>
      </section>

      {/* ================= Core Fields ================= */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          My Core Fields
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card */}
          <div className="glass-card hover:scale-105 transition transform p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Artificial Intelligence
            </h3>
            <p className="text-gray-700">
              Studying intelligent systems, ML basics, and building AI-based
              academic projects.
            </p>
          </div>

          <div className="glass-card hover:scale-105 transition transform p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">DSA in C++</h3>
            <p className="text-gray-700">
              Implementing Linked Lists, Trees, Graphs, Sorting, Searching, and
              advanced algorithms.
            </p>
          </div>

          <div className="glass-card hover:scale-105 transition transform p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Python & Data Science
            </h3>
            <p className="text-gray-700">
              Using NumPy, Pandas, and Kaggle datasets for analysis & ML
              practice.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Web Development ================= */}
      <section className="py-20 bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl border mx-auto max-w-6xl p-10">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Web Development
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          I build modern, responsive UIs using <strong>Next.js</strong>,{" "}
          <strong>React</strong>,<strong> TailwindCSS</strong> and clean design
          principles. My focus is minimalism, clarity, and performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10">
          <div className="premium-skill">Next.js</div>
          <div className="premium-skill">React</div>
          <div className="premium-skill">TailwindCSS</div>
          <div className="premium-skill">JavaScript</div>
          <div className="premium-skill">Git & GitHub</div>
        </div>
      </section>
    </main>
  );
}
