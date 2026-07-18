import React from 'react';

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hello World, I'm</p>
        <h1 className="hero-name glitch-text">
          <span className="cyan">ZHEN</span>
          <span className="magenta">ZCS</span>
        </h1>
        <p className="hero-subtitle">
          Full-Stack Developer &amp; Creative Coder
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="neon-button">
            查看项目
          </a>
          <a href="#contact" className="neon-button neon-button-magenta">
            联系我
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
