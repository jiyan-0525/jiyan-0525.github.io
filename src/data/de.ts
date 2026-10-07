import type { Cv } from './types';

export const de: Cv = {
  lang: 'de',
  title: 'Jiyan Wang – Lebenslauf',
  nameFirst: 'Jiyan',
  nameLast: 'Wang',
  role: 'Junior AI DevOps Engineer',
  github: 'github.com/jiyan-0525',
  contacts: [
    { icon: '✉', text: 'jiyanw825@gmail.com', href: 'mailto:jiyanw825@gmail.com' },
    { icon: '☎', text: '+49 172 5161 530' },
    { icon: '⌂', text: 'Feurerstraße, Heilbronn, Deutschland' },
  ],
  profile:
    'Fokus auf Deployment-Automatisierung, Docker-Infrastruktur und Backend-Services (FastAPI, Pydantic). ' +
    'Seit 06/2025 an der 42 Heilbronn, zuvor mehrjährige Vertriebserfahrung in der Automobil- und E-Commerce-Branche in China.',
  tabs: [
    { id: 'overview', label: 'Übersicht' },
    { id: 'experience', label: 'Berufserfahrung' },
    { id: 'education', label: 'Ausbildung' },
    { id: 'projects', label: 'Projekte' },
    { id: 'extras', label: 'Sonstiges' },
  ],
  sections: {
    overview: 'Übersicht',
    stack: 'Tech-Stack',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    projects: 'Ausgewählte Projekte',
    extras: 'Sonstiges',
  },
  experience: [
    {
      title: 'Vertriebsmitarbeiter',
      date: '06/2016 – 12/2020',
      org: 'Pony Testing International Group · China',
      bullets: [
        'Kundenbetreuung für Prüf- und Labordienstleistungen in der Automobil- und Elektronikbranche',
        'Auftragsabwicklung, Planungskoordination, Außendienst',
      ],
    },
    {
      title: 'Vertriebsmitarbeiter',
      date: '06/2015 – 05/2016',
      org: 'JYall.com · Shanghai, China',
      bullets: ['Startup im Bereich E-Commerce'],
    },
    {
      title: 'Vertriebsassistent',
      date: '09/2008 – 08/2013',
      org: 'Jiuhe Automobil-Service (Toyota) · China',
      bullets: [
        'Fahrzeugregistrierung & Vertragsverwaltung',
        'Bestandsverwaltung, tägliche Verkaufs-KPI-Berichterstattung',
      ],
    },
  ],
  education: [
    {
      title: 'AI Engineering',
      date: '09/2026 – 10/2026',
      org: 'Arkadia Heilbronn · Vollzeitkurs · Heilbronn, Deutschland',
      bullets: [
        'Orchestrierung von Multi-Agent-Systemen mit Pydantic AI sowie lokalem LLM-Fallback',
      ],
    },
    {
      title: '42 Heilbronn',
      date: '06/2025 – heute',
      org: 'Peer-to-Peer-Programmierungsschule',
      bullets: [
        'Projektbasiertes Lernen: C, C++, Linux, Netzwerk, Algorithmen',
        'Tägliche Git-Arbeit auf GitHub, selbstgesteuert & kollaborativ',
      ],
    },
    {
      title: 'IT-Kenntnisse-Trainee',
      date: '09/2024 – 02/2025',
      org: 'Education Future, Heilbronn · DEKRA-zertifiziert',
      bullets: [
        'Python, HTML/CSS, SQL · Computer und Bauteile',
        'IT-Branche und agiles Arbeiten · Praktikum bei Tecsee GmbH (240 h)',
      ],
    },
    {
      title: 'SAP S/4HANA – Vertrieb & Versand',
      date: '09/2023 – 02/2024',
      org: 'alfatraining, Heilbronn · zertifiziert UC_SD_S42022',
      bullets: [
        'Verkaufsprozesse, Beschaffung & Lieferung; Zusatzqualifizierung in der Materialwirtschaft (MM)',
      ],
    },
    {
      title: 'Umzug nach Deutschland – Deutschkurs & Führerschein',
      date: '02/2021 – 08/2023',
      org: 'Heilbronn, Deutschland',
      bullets: ['Intensiver Deutschkurs (C1) & deutscher Führerschein'],
    },
    {
      title: 'Bachelor of Management (B.A. Management)',
      date: '09/2016 – 12/2018',
      org: 'Nanjing-Universität · von der KMK anerkannt',
      bullets: [
        'Personalwirtschaft',
        'Teilzeitstudium (Abend- & Wochenendunterricht) neben dem Vollzeit-Job',
      ],
    },
    {
      title: 'College – Personalwirtschaft',
      date: '09/2009 – 06/2012',
      org: 'Pädagogische Universität Nanjing (Nanjing Normal University) · China',
      bullets: ['Teilzeitstudium (Abend- & Wochenendunterricht) neben dem Vollzeit-Job'],
    },
  ],
  stack: [
    { label: 'DevOps', value: 'Linux, Docker, Git, GitHub Actions, DigitalOcean' },
    { label: 'Sprachen', value: 'Python, C, C++, SQL, Bash' },
    { label: 'Backend', value: 'FastAPI, Uvicorn, Pydantic' },
    { label: 'Frontend', value: 'React, TypeScript, HTML, CSS' },
    { label: 'Datenbanken', value: 'SQLite, SQLAlchemy' },
  ],
  projects: [
    {
      name: 'AI Language Coach',
      desc: 'AI-Agent in Produktion auf einer DigitalOcean-Droplet',
      tags: ['DigitalOcean', 'FastAPI', 'Pydantic AI', 'SQLite'],
    },
    {
      name: 'Minishell',
      desc: 'Eine vollständig funktionsfähige Unix-Shell von Grund auf in C entwickelt',
      tags: ['Linux', 'Parser', 'Pipes', 'Fork', 'Signals', 'File Descriptors'],
      origin: '42 Heilbronn',
    },
    {
      name: 'Inception',
      desc: 'Docker-Infrastruktur: Nginx, WordPress, MariaDB in einer VM',
      tags: ['Docker', 'Docker Compose', 'Networking', 'SSL/TLS', 'YAML'],
      origin: '42 Heilbronn',
    },
    {
      name: 'Webserv',
      desc: 'HTTP/1.1-Webserver in C++',
      tags: ['C++', 'HTTP/1.1', 'Sockets', 'I/O Multiplexing'],
      origin: '42 Heilbronn',
    },
  ],
  facts: [{ label: 'Führerschein', value: 'Klasse B (DE)' }],
  languages: [
    { name: 'Chinesisch', level: 'Muttersprache' },
    { name: 'Deutsch', level: 'C1-Kurs', note: 'Beruflich' },
    { name: 'Englisch', level: 'B2' },
  ],
  hobbies: { label: 'Hobbys', value: 'Reisen, Kochen, Yoga, Skifahren' },
  footer: { name: 'Jiyan Wang · Heilbronn, Deutschland', updated: 'Stand: Oktober 2026' },
};
