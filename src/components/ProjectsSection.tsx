import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: { text: string; color: 'cyan' | 'magenta' | 'yellow' | 'green' }[];
  icon: string;
  color: 'cyan' | 'magenta' | 'yellow' | 'green';
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: '赛博朋克个人主页',
    description: '炫酷的赛博朋克风格个人主页，包含粒子动画背景、霓虹发光效果、响应式布局。',
    tags: [
      { text: 'Astro', color: 'cyan' },
      { text: 'React', color: 'cyan' },
      { text: 'Canvas', color: 'magenta' },
      { text: 'CSS3', color: 'magenta' },
    ],
    icon: '🌐',
    color: 'cyan',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: '智能数据看板',
    description: '实时数据可视化仪表盘，支持多维度数据分析、自定义图表、暗黑主题切换。',
    tags: [
      { text: 'React', color: 'cyan' },
      { text: 'D3.js', color: 'magenta' },
      { text: 'WebSocket', color: 'yellow' },
      { text: 'Node.js', color: 'green' },
    ],
    icon: '📊',
    color: 'magenta',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI 推理服务框架',
    description: '基于 vLLM/SGLang 的高性能大模型推理服务，支持多模型热切换、动态批处理、流式输出。',
    tags: [
      { text: 'vLLM', color: 'yellow' },
      { text: 'SGLang', color: 'yellow' },
      { text: 'Fastify', color: 'cyan' },
      { text: 'Rust', color: 'green' },
    ],
    icon: '🤖',
    color: 'yellow',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: '区块链钱包',
    description: '多链数字资产管理钱包，支持钱包创建、交易签名、DeFi 交互。',
    tags: [
      { text: 'Solidity', color: 'magenta' },
      { text: 'Ethers.js', color: 'cyan' },
      { text: 'Next.js', color: 'cyan' },
      { text: 'IPFS', color: 'green' },
    ],
    icon: '🔗',
    color: 'green',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-cyan">项</span> <span className="accent-magenta">目</span> <span className="accent-yellow">展</span> <span className="accent-green">示</span>
        </h2>
        <div className="grid-2">
          {projects.map((project) => (
            <div key={project.title} className={`card card-${project.color}`}>
              <div className="project-card-image" style={{ color: `var(--neon-${project.color})` }}>
                {project.icon}
              </div>
              <h3 className="card-title" style={{ color: `var(--neon-${project.color})`, textShadow: `0 0 8px rgba(0,240,255,0.3)` }}>
                {project.title}
              </h3>
              <p className="project-card-description">{project.description}</p>
              <div style={{ marginBottom: 16 }}>
                {project.tags.map((tag) => (
                  <span key={tag.text} className={`tech-tag tech-tag-${tag.color}`}>
                    {tag.text}
                  </span>
                ))}
              </div>
              <div className="project-card-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} className="project-link project-link-magenta">
                    在线演示
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
