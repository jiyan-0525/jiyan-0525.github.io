import type { Entry as EntryData } from '../data';

export function SectionHeader({ label }: { label: string }) {
  return (
    <div className="section-header">
      <span className="section-label">{label}</span>
      <div className="section-line" />
    </div>
  );
}

export function Entry({ entry }: { entry: EntryData }) {
  return (
    <div className="entry">
      <div className="entry-head">
        <span className="entry-title">{entry.title}</span>
        <span className="entry-date">{entry.date}</span>
      </div>
      <div className="entry-org">{entry.org}</div>
      <ul className="bullets">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
