'use client';

import { useState } from 'react';

const SUGGESTIONS = [
  "Summarise Ayan's development process",
  "Which tools does he use?",
  "Show me relevant projects for a fintech idea",
  "What inspires his work?"
];

export default function AISection() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    setResponse(null);
    setError(null);
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch response');
      }
      
      setResponse(data.reply);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="animate-fade-in delay-300 mobile-col mobile-gap-6 mobile-p-6" style={{ 
      backgroundColor: 'var(--chip-bg)', 
      borderRadius: '24px', 
      padding: '3rem',
      marginBottom: '6rem',
      display: 'flex',
      gap: '4rem',
      alignItems: 'flex-start'
    }}>
      <div className="mobile-w-full" style={{ flex: '1', minWidth: '300px' }}>
        <h2 className="text-4xl mb-4">Ask Ayan&apos;s AI</h2>
        <p className="text-secondary" style={{ lineHeight: '1.6', maxWidth: '300px' }}>
          Get quick answers about my work, process, tools or ideas. Try an example below or ask anything.
        </p>
      </div>
      
      <div className="mobile-w-full" style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <form 
          className="ai-search-form"
          onSubmit={(e) => { e.preventDefault(); handleSubmit(query); }}
          style={{ 
            display: 'flex', 
            backgroundColor: 'var(--input-bg)', 
            border: '1px solid var(--input-border)',
            borderRadius: '100px', 
            padding: '0.5rem 0.5rem 0.5rem 1.5rem',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <span className="ai-search-icon" style={{ color: '#0066FF', fontSize: '1.2rem', marginRight: '1rem', flexShrink: 0 }}>✨</span>
          <input 
            className="ai-search-input"
            type="text" 
            placeholder="Ask a question about my work..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            style={{ 
              flex: '1', 
              minWidth: 0,
              border: 'none', 
              outline: 'none', 
              fontSize: '1rem',
              color: 'var(--text-color)',
              background: 'transparent',
              opacity: isLoading ? 0.5 : 1,
              textOverflow: 'ellipsis'
            }}
          />
          <button 
            className="ai-search-btn"
            type="submit"
            disabled={isLoading || !query.trim()}
            style={{ 
              backgroundColor: 'var(--text-color)', 
              color: 'var(--bg-color)', 
              width: '40px', 
              height: '40px',
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '1rem',
              opacity: (isLoading || !query.trim()) ? 0.5 : 1,
              cursor: (isLoading || !query.trim()) ? 'default' : 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            {isLoading ? (
              <div style={{ width: '16px', height: '16px', border: '2px solid var(--bg-color)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            ) : '→'}
          </button>
        </form>
        
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 768px) {
            .ai-search-form {
              padding: 0.5rem 0.5rem 0.5rem 1rem !important;
            }
            .ai-search-icon {
              margin-right: 0.5rem !important;
            }
            .ai-search-input {
              font-size: 0.85rem !important;
            }
            .ai-search-btn {
              margin-left: 0.5rem !important;
            }
          }
        `}</style>
        
        {!response && !error && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {SUGGESTIONS.map((suggestion, index) => (
              <button 
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  handleSubmit(suggestion);
                }}
                disabled={isLoading}
                style={{
                  backgroundColor: 'var(--bg-color)',
                  border: '1px solid var(--border-color)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  color: 'var(--secondary-text)',
                  transition: 'border-color 0.2s',
                  cursor: isLoading ? 'default' : 'pointer',
                  opacity: isLoading ? 0.5 : 1
                }}
                onMouseOver={(e) => { if(!isLoading) e.currentTarget.style.borderColor = 'var(--text-color)'; }}
                onMouseOut={(e) => { if(!isLoading) e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {error && (
          <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 0, 0, 0.05)', borderRadius: '16px', color: 'red', fontSize: '0.9rem', border: '1px solid rgba(255,0,0,0.1)' }}>
            {error}
          </div>
        )}

        {response && (
          <div style={{ 
            padding: '1.5rem 2rem', 
            backgroundColor: 'var(--bg-color)', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)',
            fontSize: '1rem',
            lineHeight: '1.7',
            color: 'var(--text-color)',
            animation: 'fadeIn 0.5s ease-out',
            whiteSpace: 'pre-wrap'
          }}>
            {response}
          </div>
        )}
      </div>
    </section>
  );
}
