import type { Cv, TabId } from './types';
import { de } from './de';
import { en } from './en';

export type { Cv, TabId, Entry, Project, StackRow, LangSkill, Fact, Contact } from './types';

export const dict: Record<'de' | 'en', Cv> = { de, en };

export const isTabId = (value: string): value is TabId =>
  dict.de.tabs.some((tab) => tab.id === value);
