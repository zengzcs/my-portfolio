import React from 'react';

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    date: '2024 - 至今',
    title: '高级全栈开发工程师',
    company: '某科技公司',
    description: '负责核心业务系统架构设计与开发，主导微服务化改造，系统性能提升 300%。带领 5 人团队完成多个重要项目交付。',
  },
  {
    date: '2022 - 2024',
    title: '全栈开发工程师',
    company: '某互联网公司',
    description: '独立负责多个 Web 应用的全栈开发，从需求分析到部署上线全流程参与。引入 CI/CD 流程，部署效率提升 60%。',
  },
  {
    date: '2020 - 2022',
    title: '前端开发工程师',
    company: '某创业公司',
    description: '负责前端架构搭建与技术选型，从零构建企业级 SPA 应用。推动团队技术升级，引入 TypeScript 与 React 技术栈。',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">工</span> <span className="accent-magenta">作</span> <span className="accent-yellow">经</span> <span className="accent-green">历</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <p className="timeline-date">{exp.date}</p>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="card-text">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
