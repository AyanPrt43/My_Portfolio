const articles = [
  { title: "The illusion of speed in modern UI", date: "Oct 12, 2026", category: "Design" },
  { title: "Designing for AI agents: A new paradigm", date: "Sep 28, 2026", category: "AI & Tech" },
  { title: "Why minimal design is harder than it looks", date: "Aug 15, 2026", category: "Process" }
];

export default function Notes() {
  return (
    <section id="notes" className="animate-fade-in delay-300" style={{ marginBottom: '8rem', paddingTop: '4rem' }}>
      <p className="text-xs text-secondary tracking-widest uppercase font-semibold mb-2">Notes & Thoughts</p>
      <h2 className="text-5xl mb-12">Writing on design and tech.</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {articles.map((note, idx) => (
          <div key={idx} className="group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)', cursor: 'pointer' }}>
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="text-xs text-secondary">{note.date}</span>
                <span className="text-xs text-secondary" style={{ padding: '0.2rem 0.6rem', backgroundColor: 'var(--chip-bg)', borderRadius: '100px' }}>{note.category}</span>
              </div>
              <h3 className="text-2xl group-hover:text-secondary transition-colors">{note.title}</h3>
            </div>
            <span style={{ fontSize: '1.5rem', color: 'var(--secondary-text)' }} className="group-hover:text-black transition-colors">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
