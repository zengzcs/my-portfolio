import React from 'react';

interface Skill {
  name: string;
  percent: number;
  color: 'cyan' | 'magenta' | 'yellow' | 'green';
}

const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', percent: 95, color: 'cyan' },
  { name: 'React / Next.js', percent: 90, color: 'cyan' },
  { name: 'Astro / Vue', percent: 85, color: 'magenta' },
  { name: 'Node.js / Express', percent: 88, color: 'magenta' },
  { name: 'Python / Django', percent: 80, color: 'yellow' },
  { name: 'PostgreSQL / MongoDB', percent: 82, color: 'yellow' },
  { name: 'Docker / K8s', percent: 75, color: 'green' },
  { name: 'AWS / GCP', percent: 70, color: 'green' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">技</span> <span className="accent-magenta">能</span> <span className="accent-yellow">展</span> <span className="accent-green">示</span>
        </h2>
        <div className="grid-2">
          <div className="card card-cyan">
            <h3 className="card-title" style={{ color: 'var(--neon-cyan)', textShadow: '0 0 8px rgba(0,240,255,0.5)' }}>
              前端开发
            </h3>
            {skills.slice(0, 4).map((skill) => (
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
              后端 & DevOps
            </h3>
            {skills.slice(4).map((skill) => (
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
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind', 'GraphQL', 'Redis', 'MongoDB', 'Vite', 'Astro'].map((tech) => (
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
