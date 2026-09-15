import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'Task-Line',
    description: 'A modern full-stack task management platform with complete workflows, date-based planning, and Firebase ID-token authentication.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    imageSrc: '/images/task-line.png',
    githubLink: 'https://github.com/AyanPrt43/Task-Line',
    liveLink: 'https://task-line-git-main-ayan-298e.vercel.app/'
  },
  {
    title: 'TaskFlow',
    description: 'Full-stack project tracking platform with role-based access control, nested subtasks, and real-time status workflows.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    imageSrc: '/images/Flow Manager.png',
    githubLink: 'https://github.com/AyanPrt43/TaskFlow.git',
    liveLink: 'https://task-flow-ayan-298e.vercel.app/login'
  },
  {
    title: 'E-Commerce Web Application',
    description: 'Full-stack storefront featuring dynamic SSR, multi-criteria filtering, and persistent cart state.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    imageSrc: '/images/e-commerce.png',
    githubLink: 'https://github.com/AyanPrt43/e-commerce-website',
    liveLink: 'https://e-commerce-ayan-298e.vercel.app/'
  },
  {
    title: 'Real-Time Currency Converter',
    description: 'Live valuation updates across 150+ global currencies with real-time two-way rate conversion and state caching.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'REST API'],
    imageSrc: '/images/Currency Convertor.png',
    githubLink: 'https://github.com/AyanPrt43/Currency_Convertor.git',
    liveLink: 'https://currency-convertor-nu-ashen.vercel.app'
  },
  {
    title: 'Fintech Experience (Razorpay Clone)',
    description: 'Modern fintech dashboard and payments showcase with complex grid layouts and interactive micro-interactions.',
    tags: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    imageSrc: '/images/razorpay-clone.png',
    githubLink: 'https://github.com/AyanPrt43', // Fallback link
    liveLink: 'https://razorpay-clone-pi-self.vercel.app/'
  }
];

export default function ProjectGallery() {
  return (
    <section id="work" className="animate-fade-in delay-300" style={{ marginBottom: '8rem' }}>
      <div className="mobile-col mobile-items-start mobile-gap-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
        <div>
          <p className="text-xs text-secondary tracking-widest uppercase font-semibold mb-2">Featured</p>
          <h2 className="text-5xl">Selected work</h2>
        </div>
        <button style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          View all work <span>→</span>
        </button>
      </div>
      
      <div className="mobile-grid-1" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '3rem 2rem' 
      }}>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
