'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({ title, description, tags, imageSrc, githubLink, liveLink }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (!liveLink) return;
    setIsHovered(true);
    
    // 800ms delay to confirm intent and show the "press" effect before opening modal
    hoverTimeoutRef.current = setTimeout(() => {
      setIsModalOpen(true);
      setIsHovered(false);
    }, 800);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <>
      <div 
        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} 
        className="group"
      >
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio: '16/10', 
            borderRadius: '12px', 
            overflow: 'hidden',
            backgroundColor: 'var(--chip-bg)',
            cursor: liveLink ? 'pointer' : 'default',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            transition: isHovered 
              ? 'transform 0.8s cubic-bezier(0, 0.9, 0.1, 1)' 
              : 'transform 0.3s ease-out'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            if (liveLink) {
              setIsModalOpen(true);
              setIsHovered(false);
            }
          }}
        >
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            style={{ objectFit: 'cover', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
            className="group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <h3 className="text-2xl font-medium tracking-tight mb-2">{title}</h3>
            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>{description}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {tags.map((tag, i) => (
              <span key={i} style={{ 
                fontSize: '0.75rem',
                color: 'var(--secondary-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {tag}
                {i < tags.length - 1 && <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>•</span>}
              </span>
            ))}
          </div>
          
          {(githubLink || liveLink) && (
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-secondary transition-colors"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem',
                    borderBottom: '1px solid currentColor',
                    paddingBottom: '2px'
                  }}
                >
                  GitHub
                </a>
              )}
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-secondary transition-colors"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem',
                    borderBottom: '1px solid currentColor',
                    paddingBottom: '2px'
                  }}
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && liveLink && mounted && createPortal(
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            animation: 'modalFadeIn 0.3s ease-out forwards'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <style>{`
            @keyframes modalFadeIn {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
          
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '1200px', 
              height: '85vh', 
              backgroundColor: 'var(--bg-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              padding: '1rem 1.5rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              borderBottom: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="font-medium">{title}</span>
                <span className="text-xs text-secondary bg-[var(--chip-bg)] px-2 py-1 rounded-full uppercase tracking-wider">Live Preview</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a 
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-secondary transition-colors"
                >
                  Open in new tab ↗
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--chip-bg)',
                    color: 'var(--text-color)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1rem',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div style={{ flex: 1, position: 'relative', backgroundColor: '#fff' }}>
              <iframe 
                src={liveLink} 
                style={{ width: '100%', height: '100%', border: 'none' }}
                title={`Live Preview of ${title}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
