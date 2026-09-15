import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mobile-wrap" style={{ padding: '2rem 0' }}>
      <div className="text-2xl font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>
        Ayan Pratap
      </div>
      
      <div className="flex gap-8 mobile-gap-4 text-sm font-medium">
        <Link href="#work" className="hover:text-secondary transition-colors">Projects</Link>
        <Link href="#about" className="hover:text-secondary transition-colors text-secondary">About</Link>
        <Link href="#notes" className="hover:text-secondary transition-colors text-secondary">Notes</Link>
        <Link href="#contact" className="hover:text-secondary transition-colors text-secondary">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-xs text-secondary flex gap-2 mobile-hidden">
          <span>Design</span>
          <span>×</span>
          <span>Technology</span>
          <span>×</span>
          <span>A more human tomorrow</span>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
