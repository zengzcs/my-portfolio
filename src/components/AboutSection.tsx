import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">关于</span> <span className="accent-magenta">我</span>
        </h2>
        <div className="card card-cyan" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <div style={{
                width: 180,
                height: 180,
                borderRadius: '50%',
                border: '3px solid var(--neon-cyan)',
                boxShadow: '0 0 20px rgba(0,240,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                background: 'linear-gradient(135deg, rgba(0,240,255,0.1), rgba(255,0,255,0.1))',
                margin: '0 auto 20px',
              }}>
                👨‍💻
              </div>
            </div>
            <div style={{ flex: '2 1 300px' }}>
              <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                你好！我是一名热爱技术的<span style={{ color: 'var(--neon-cyan)', textShadow: '0 0 8px rgba(0,240,255,0.5)' }}>全栈开发工程师 & AI 工程师</span>，
                专注于 AI 推理框架、高性能后端服务和视觉震撼的 Web 应用。擅长将前沿 AI 技术与工程实践结合，
                打造高性能、可落地的系统。
              </p>
              <br />
              <p className="card-text">
                我相信代码不仅是逻辑的载体，更是<span style={{ color: 'var(--neon-magenta)', textShadow: '0 0 8px rgba(255,0,255,0.5)' }}>创造力的表达</span>。
                每一个项目都是一次探索技术边界、挑战视觉极限的旅程。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
