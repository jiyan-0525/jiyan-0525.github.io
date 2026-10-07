import type { Cv } from './types';

export const en: Cv = {
  lang: 'en',
  title: 'Jiyan Wang – Curriculum Vitae',
  nameFirst: 'Jiyan',
  nameLast: 'Wang',
  role: 'Junior AI DevOps Engineer',
  github: 'github.com/jiyan-0525',
  contacts: [
    { icon: '✉', text: 'jiyanw825@gmail.com', href: 'mailto:jiyanw825@gmail.com' },
    { icon: '☎', text: '+49 172 5161 530' },
    { icon: '⌂', text: 'Feurerstraße, Heilbronn, Germany' },
  ],
  profile:
    'Focused on deployment automation, Docker infrastructure and backend services (FastAPI, Pydantic). ' +
    'At 42 Heilbronn since 06/2025, previously several years of sales experience in the automotive and e-commerce industries in China.',
  tabs: [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'extras', label: 'Extras' },
  ],
  sections: {
    overview: 'Overview',
    stack: 'Tech Stack',
    experience: 'Work Experience',
    education: 'Education',
    projects: 'Selected Projects',
    extras: 'Extras',
  },
  experience: [
    {
      title: 'Sales Representative',
      date: '06/2016 – 12/2020',
      org: 'Pony Testing International Group · China',
      bullets: [
        'Customer support for testing and laboratory services in the automotive and electronics industries',
        'Order processing, coordination of planning, field sales',
      ],
    },
    {
      title: 'Sales Representative',
      date: '06/2015 – 05/2016',
      org: 'JYall.com · Shanghai, China',
      bullets: ['E-commerce startup'],
    },
    {
      title: 'Sales Assistant',
      date: '09/2008 – 08/2013',
      org: 'Jiuhe Automotive Service (Toyota) · China',
      bullets: [
        'Vehicle registration & contract management',
        'Inventory management, daily sales KPI reporting',
      ],
    },
  ],
  education: [
    {
      title: 'AI Engineering',
      date: '09/2026 – 10/2026',
      org: 'Arkadia Heilbronn · Full-time course · Heilbronn, Germany',
      bullets: [
        'Orchestrating multi-agent systems with Pydantic AI and local LLM fallback',
      ],
    },
    {
      title: '42 Heilbronn',
      date: '06/2025 – present',
      org: 'Peer-to-peer programming school',
      bullets: [
        'Project-based learning: C, C++, Linux, networking, algorithms',
        'Daily Git work on GitHub, self-directed & collaborative',
      ],
    },
    {
      title: 'IT Skills Trainee',
      date: '09/2024 – 02/2025',
      org: 'Education Future, Heilbronn · DEKRA certified',
      bullets: [
        'Python, HTML/CSS, SQL · computers and components',
        'IT industry and agile working · internship at Tecsee GmbH (240 h)',
      ],
    },
    {
      title: 'SAP S/4HANA – Sales & Distribution',
      date: '09/2023 – 02/2024',
      org: 'alfatraining, Heilbronn · certified UC_SD_S42022',
      bullets: [
        'Sales processes, procurement & delivery; additional qualification in materials management (MM)',
      ],
    },
    {
      title: 'Move to Germany – German course & driving licence',
      date: '02/2021 – 08/2023',
      org: 'Heilbronn, Germany',
      bullets: ['Intensive German course (C1) & German driving licence'],
    },
    {
      title: 'Bachelor of Management (B.A. Management)',
      date: '09/2016 – 12/2018',
      org: 'Nanjing University · recognised by the KMK',
      bullets: [
        'Human resource management',
        'Part-time studies (evening & weekend classes) alongside a full-time job',
      ],
    },
    {
      title: 'College – Human Resource Management',
      date: '09/2009 – 06/2012',
      org: 'Nanjing Normal University · China',
      bullets: ['Part-time studies (evening & weekend classes) alongside a full-time job'],
    },
  ],
  stack: [
    { label: 'DevOps', value: 'Linux, Docker, Git, GitHub Actions, DigitalOcean' },
    { label: 'Languages', value: 'Python, C, C++, SQL, Bash' },
    { label: 'Backend', value: 'FastAPI, Uvicorn, Pydantic' },
    { label: 'Frontend', value: 'React, TypeScript, HTML, CSS' },
    { label: 'Databases', value: 'SQLite, SQLAlchemy' },
  ],
  projects: [
    {
      name: 'AI Language Coach',
      desc: 'AI agent running in production on a DigitalOcean droplet',
      tags: ['DigitalOcean', 'FastAPI', 'Pydantic AI', 'SQLite'],
    },
    {
      name: 'Minishell',
      desc: 'A fully functional Unix shell built from scratch in C',
      tags: ['Linux', 'Parser', 'Pipes', 'Fork', 'Signals', 'File Descriptors'],
      origin: '42 Heilbronn',
    },
    {
      name: 'Inception',
      desc: 'Docker infrastructure: Nginx, WordPress, MariaDB in a VM',
      tags: ['Docker', 'Docker Compose', 'Networking', 'SSL/TLS', 'YAML'],
      origin: '42 Heilbronn',
    },
    {
      name: 'Webserv',
      desc: 'HTTP/1.1 web server in C++',
      tags: ['C++', 'HTTP/1.1', 'Sockets', 'I/O Multiplexing'],
      origin: '42 Heilbronn',
    },
  ],
  facts: [{ label: 'Driving licence', value: 'Class B (DE)' }],
  languages: [
    { name: 'Chinese', level: 'Native' },
    { name: 'German', level: 'C1 course', note: 'Business' },
    { name: 'English', level: 'B2' },
  ],
  hobbies: { label: 'Hobbies', value: 'Traveling, cooking, yoga, skiing' },
  footer: { name: 'Jiyan Wang · Heilbronn, Germany', updated: 'Last updated: October 2026' },
};
