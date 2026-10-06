export interface Contact {
  icon: string;
  text: string;
  href?: string;
}

export interface Entry {
  title: string;
  date: string;
  org: string;
  meta?: string[];
  bullets: string[];
}

export interface StackRow {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
}

export interface LangSkill {
  name: string;
  level: string;
  note?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export type TabId = 'overview' | 'experience' | 'education' | 'projects' | 'extras';

export interface Cv {
  lang: 'de' | 'en';
  title: string;
  nameFirst: string;
  nameLast: string;
  role: string;
  github: string;
  contacts: Contact[];
  profile: string;
  tabs: { id: TabId; label: string }[];
  sections: Record<TabId | 'stack', string>;
  experience: Entry[];
  education: Entry[];
  stack: StackRow[];
  projects: Project[];
  facts: Fact[];
  languages: LangSkill[];
  hobbies: { label: string; value: string };
  footer: { name: string; updated: string };
}
