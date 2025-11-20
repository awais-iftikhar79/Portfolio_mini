// app/projects/page.js
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    { id: 'portfolio', title: 'Portfolio Website', desc: 'Built with Next.js & Tailwind.' },
    { id: 'bankloan', title: 'Bank Loan App', desc: 'Loan management project.' },
    // add more as you like
  ];

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <article key={p.id} className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <Link href={`/projects/${p.id}`} className="text-blue-600 hover:underline">View details</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
