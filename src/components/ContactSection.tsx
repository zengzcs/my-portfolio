import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">联</span> <span className="accent-magenta">系</span> <span className="accent-yellow">我</span>
        </h2>
        <div className="card card-cyan" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p className="card-text" style={{ fontSize: '1.1rem', marginBottom: 30 }}>
            有任何想法或合作机会？随时通过以下方式联系我
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 30 }}>
            <a href="mailto:zengzcs@example.com" className="social-link" title="Email">
              ✉
            </a>
            <a href="https://github.com/zengzcs" target="_blank" rel="noopener noreferrer" className="social-link social-link-magenta" title="GitHub">
              ⌨
            </a>
            <a href="https://linkedin.com/in/zengzcs" target="_blank" rel="noopener noreferrer" className="social-link social-link-yellow" title="LinkedIn">
              🔗
            </a>
            <a href="https://twitter.com/zengzcs" target="_blank" rel="noopener noreferrer" className="social-link social-link-green" title="Twitter">
              🐦
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: 'var(--neon-cyan)', fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', letterSpacing: 1, marginBottom: 4 }}>
                EMAIL
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                zengzcs@example.com
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--neon-magenta)', fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', letterSpacing: 1, marginBottom: 4 }}>
                LOCATION
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                China
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
