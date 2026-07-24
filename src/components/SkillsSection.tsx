import React from 'react';

interface Skill {
  name: string;
  percent: number;
  color: 'cyan' | 'magenta' | 'yellow' | 'green';
}

const frontendSkills: Skill[] = [
  { name: 'JavaScript / TypeScript', percent: 95, color: 'cyan' },
  { name: 'React / Next.js', percent: 90, color: 'cyan' },
  { name: 'Astro / Vue', percent: 85, color: 'cyan' },
];

const backendSkills: Skill[] = [
  { name: 'Python / Flask', percent: 90, color: 'magenta' },
  { name: 'Java / Spring Boot', percent: 85, color: 'magenta' },
  { name: 'Go / Gin', percent: 82, color: 'magenta' },
  { name: 'Rust / Axum', percent: 80, color: 'magenta' },
  { name: 'Fastify / NestJS', percent: 92, color: 'magenta' },
];

const aiSkills: Skill[] = [
  { name: 'vLLM / SGLang', percent: 85, color: 'yellow' },
  { name: 'llama.cpp', percent: 78, color: 'yellow' },
  { name: 'Docker / K8s / AWS', percent: 75, color: 'yellow' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">技</span> <span className="accent-magenta">能</span> <span className="accent-yellow">展</span> <span className="accent-green">示</span>
        </h2>
        <div className="grid-3">
          <div className="card card-cyan">
            <h3 className="card-title" style={{ color: 'var(--neon-cyan)', textShadow: '0 0 8px rgba(0,240,255,0.5)' }}>
              前端开发
            </h3>
            {frontendSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: 18 }}>
                <div className="skill-item-label">
                  <span className="skill-item-name">{skill.name}</span>
                  <span className="skill-item-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill skill-bar-${skill.color}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="card card-magenta">
            <h3 className="card-title" style={{ color: 'var(--neon-magenta)', textShadow: '0 0 8px rgba(255,0,255,0.5)' }}>
              后端开发
            </h3>
            {backendSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: 18 }}>
                <div className="skill-item-label">
                  <span className="skill-item-name">{skill.name}</span>
                  <span className="skill-item-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill skill-bar-${skill.color}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="card card-yellow">
            <h3 className="card-title" style={{ color: 'var(--neon-yellow)', textShadow: '0 0 8px rgba(255,230,0,0.5)' }}>
              AI 推理
            </h3>
            {aiSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: 18 }}>
                <div className="skill-item-label">
                  <span className="skill-item-name">{skill.name}</span>
                  <span className="skill-item-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-bar-fill skill-bar-${skill.color}`}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 40 }}>
          <div className="card card-yellow" style={{ textAlign: 'center' }}>
            <h3 className="card-title" style={{ color: 'var(--neon-yellow)', textShadow: '0 0 8px rgba(255,230,0,0.5)' }}>
              常用技术栈
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 16 }}>
              {['React', 'TypeScript', 'Astro', 'Fastify', 'NestJS', 'Rust', 'Axum', 'vLLM', 'SGLang', 'llama.cpp', 'Docker', 'K8s'].map((tech) => (
                <span key={tech} className={`tech-tag tech-tag-${['cyan', 'magenta', 'yellow', 'green'][Math.floor(Math.random() * 4)]}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
