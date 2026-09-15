export default function About() {
  return (
    <section id="about" className="animate-fade-in delay-300" style={{ marginBottom: '8rem', paddingTop: '4rem' }}>
      
      <div className="mobile-col mobile-gap-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem' }}>
        
        {/* Left Column: Intro */}
        <div className="mobile-w-full" style={{ flex: '1', minWidth: '300px', maxWidth: '600px' }}>
          <p className="text-xs text-secondary tracking-widest uppercase font-semibold mb-6">About Me</p>
          <h2 className="text-4xl mb-8" style={{ lineHeight: '1.3' }}>
            I engineer digital experiences that are robust, secure, and user-focused.
          </h2>
          <div className="text-lg text-secondary" style={{ lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Hi, I'm Ayan Pratap. I'm a Full Stack Developer specializing in the MERN stack and Next.js. 
              My work focuses on architecting secure, token-authenticated RESTful APIs, designing scalable database schemas, 
              and crafting responsive frontends that prioritize fast page loads and seamless state management.
            </p>
            <p>
              Whether I'm optimizing database queries or fine-tuning micro-interactions in the UI, I believe technology should be an invisible enabler—amplifying human potential through scalable and beautifully designed applications.
            </p>
          </div>
        </div>

        {/* Right Column: Details */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '4rem', paddingTop: '2rem' }}>
          
          <div>
            <h3 className="text-xs text-secondary tracking-widest uppercase font-semibold mb-6">Experience</h3>
            <div>
              <h4 className="text-xl font-medium mb-1">Intellipaat</h4>
              <p className="text-secondary mb-3">Web Development Intern</p>
              <p className="text-xs text-secondary tracking-widest uppercase">2025 — 2026</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-secondary tracking-widest uppercase font-semibold mb-6">Education</h3>
            <div>
              <h4 className="text-xl font-medium mb-1" style={{ lineHeight: '1.4' }}>Feroze Gandhi Institute of Engineering & Technology</h4>
              <p className="text-secondary mb-3">B.Tech Computer Science (CGPA: 7.6/10)</p>
              <p className="text-xs text-secondary tracking-widest uppercase">2022 — 2026</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs text-secondary tracking-widest uppercase font-semibold mb-6">Core Technologies</h3>
            <p className="text-secondary text-lg" style={{ lineHeight: '1.8' }}>
              JavaScript (ES6+) • TypeScript • React.js • Next.js • Node.js • Express.js • MongoDB • PostgreSQL • Tailwind CSS • Firebase • REST APIs
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
