import { useEffect, useRef, useState } from 'react';
import type { Cv, TabId } from '../data';
import { Entry, SectionHeader } from './Section';

interface PanelProps {
  active: boolean;
  id: TabId;
  children: React.ReactNode;
}

function Panel({ active, id, children }: PanelProps) {
  return (
    <section
      className={`panel${active ? ' is-active' : ''}`}
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      aria-hidden={!active}
      data-tab={id}
    >
      {children}
    </section>
  );
}

const LEVEL_PCT: Record<string, number> = {
  native: 100,
  muttersprache: 100,
  'c1-kurs': 82,
  'c1 course': 82,
  c2: 95,
  c1: 82,
  b2: 68,
  b1: 52,
  a2: 36,
  a1: 20,
};

function levelPercent(level: string) {
  return LEVEL_PCT[level.toLowerCase()] ?? 60;
}

function LangRow({
  name,
  level,
  note,
  active,
}: {
  name: string;
  level: string;
  note?: string;
  active: boolean;
}) {
  const pct = levelPercent(level);
  return (
    <div className="lang-row">
      <span>{name}</span>
      <span className="lv">
        {level}
        {note && <small>{note}</small>}
      </span>
      <div
        className="lang-bar"
        style={{ width: active ? `${pct}%` : '0%' }}
        aria-hidden="true"
      />
    </div>
  );
}

interface PanelsProps {
  cv: Cv;
  active: TabId;
}

export function Panels({ cv, active }: PanelsProps) {
  const [extrasIn, setExtrasIn] = useState(false);
  const extrasRef = useRef(false);

  useEffect(() => {
    if (active === 'extras' && !extrasRef.current) {
      extrasRef.current = true;
      const t = setTimeout(() => setExtrasIn(true), 80);
      return () => clearTimeout(t);
    }
    if (active !== 'extras') {
      extrasRef.current = false;
      setExtrasIn(false);
    }
  }, [active]);

  return (
    <div className="panels">
      <div className="col-a">
        <Panel active={active === 'overview'} id="overview">
          <SectionHeader label={cv.sections.overview} />
          <p className="profile">{cv.profile}</p>

          <SectionHeader label={cv.sections.stack} />
          <div className="stack">
            {cv.stack.map((row) => (
              <div className="stack-row" key={row.label}>
                <span className="sk">{row.label}</span>
                {row.value}
              </div>
            ))}
          </div>
        </Panel>

        <Panel active={active === 'experience'} id="experience">
          <SectionHeader label={cv.sections.experience} />
          {cv.experience.map((entry) => (
            <Entry key={`${entry.title}-${entry.date}`} entry={entry} />
          ))}
        </Panel>

        <Panel active={active === 'education'} id="education">
          <SectionHeader label={cv.sections.education} />
          {cv.education.map((entry) => (
            <Entry key={`${entry.title}-${entry.date}`} entry={entry} />
          ))}
        </Panel>
      </div>

      <div className="col-b">
        <Panel active={active === 'projects'} id="projects">
          <SectionHeader label={cv.sections.projects} />
          {cv.projects.map((project) => (
            <div className="proj" key={project.name}>
              {project.origin && <div className="proj-origin">{project.origin}</div>}
              <div className="proj-name">{project.name}</div>
              <div className="proj-desc">{project.desc}</div>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </Panel>

        <Panel active={active === 'extras'} id="extras">
          <SectionHeader label={cv.sections.extras} />
          {cv.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <b>{fact.label}</b>
              <span className="fact-val">{fact.value}</span>
            </div>
          ))}
          {cv.languages.map((lang) => (
            <LangRow
              key={lang.name}
              name={lang.name}
              level={lang.level}
              note={lang.note}
              active={extrasIn}
            />
          ))}
          <div className="fact fact-last">
            <b>{cv.hobbies.label}</b>
            <span className="fact-val">{cv.hobbies.value}</span>
          </div>
        </Panel>
      </div>
    </div>
  );
}
