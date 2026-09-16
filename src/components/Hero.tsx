import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex justify-between items-center mobile-col-reverse mobile-py-8 mobile-gap-8" style={{ padding: '4rem 0 6rem' }}>
      <div className="flex-col gap-4 animate-fade-in mobile-w-full" style={{ maxWidth: '600px', zIndex: 10 }}>
        <p className="text-xs text-secondary tracking-widest uppercase font-semibold mb-4">
          Frontend Developer
        </p>
        
        <h1 className="text-7xl mobile-text-5xl" style={{ lineHeight: '1.1', marginBottom: '1.5rem' }}>
          I build modern<br/>digital experiences.
        </h1>
        
        <p className="text-lg text-secondary mb-8" style={{ maxWidth: '480px', lineHeight: '1.6' }}>
          I enjoy bringing ideas to life in the browser, mixing good design with solid engineering to build web apps that are fast, reliable, and easy to use.
        </p>
        
        <a 
          href="/14-Sept Resume.pdf"
          download="Ayan_Pratap_Resume.pdf"
          className="flex items-center gap-2 transition-opacity hover:opacity-80" 
          style={{ 
            padding: '1rem 2rem', 
            borderRadius: '2rem', 
            width: 'fit-content',
            backgroundColor: 'var(--text-color)',
            color: 'var(--bg-color)',
            fontWeight: 500,
            display: 'inline-flex'
          }}>
          Download Resume 
          <span style={{ fontSize: '1.2rem', marginLeft: '0.25rem' }}>↓</span>
        </a>
      </div>

      <div className="relative animate-fade-in delay-200 mobile-w-full mobile-h-auto mobile-aspect-square" style={{ width: '500px', height: '500px' }}>
        <Image 
          src="/images/hero_3d.jpg" 
          alt="Abstract 3D sphere" 
          fill
          style={{ objectFit: 'contain', mixBlendMode: 'var(--hero-mix)' as any, filter: 'var(--hero-filter)' }}
          priority
        />
      </div>
    </section>
  );
}
