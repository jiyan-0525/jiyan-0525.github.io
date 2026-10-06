import type { Cv, TabId } from '../data';

interface Props {
  cv: Cv;
  active: TabId;
  onSelect: (id: TabId) => void;
}

export function TabNav({ cv, active, onSelect }: Props) {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = cv.tabs.findIndex((tab) => tab.id === active);
    let next = -1;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (index + 1) % cv.tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (index - 1 + cv.tabs.length) % cv.tabs.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = cv.tabs.length - 1;
    }

    if (next >= 0) {
      event.preventDefault();
      onSelect(cv.tabs[next].id);
      const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('button');
      buttons[next]?.focus();
    }
  };

  return (
    <nav className="tabnav" role="tablist" aria-label={cv.sections.overview} onKeyDown={onKeyDown}>
      {cv.tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={`tab${isActive ? ' is-active' : ''}`}
            onClick={() => onSelect(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}
