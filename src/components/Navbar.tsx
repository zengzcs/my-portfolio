import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="navbar-brand">
          &lt;ZENG /&gt;
        </a>
        <ul className="navbar-links">
          <li><a href="#about">关于</a></li>
          <li><a href="#skills">技能</a></li>
          <li><a href="#projects">项目</a></li>
          <li><a href="#experience">经历</a></li>
          <li><a href="#contact">联系</a></li>
        </ul>
      </div>
    </nav>
  );
}
