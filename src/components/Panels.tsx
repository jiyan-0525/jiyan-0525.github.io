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

interface PanelsProps {
  cv: Cv;
  active: TabId;
}

export function Panels({ cv, active }: PanelsProps) {
  return (
    <div className="panels">
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

      <Panel active={active === 'projects'} id="projects">
        <SectionHeader label={cv.sections.projects} />
        {cv.projects.map((project) => (
          <div className="proj" key={project.name}>
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
            <b>{fact.label}</b> · {fact.value}
          </div>
        ))}
        {cv.languages.map((lang) => (
          <div className="lang-row" key={lang.name}>
            <span>{lang.name}</span>
            <span className="lv">
              {lang.level}
              {lang.note && <small>{lang.note}</small>}
            </span>
          </div>
        ))}
        <div className="fact fact-last">
          <b>{cv.hobbies.label}</b> · {cv.hobbies.value}
        </div>
      </Panel>
    </div>
  );
}
