import { useEffect, useState } from 'react';
import { dict, isTabId, type TabId } from './data';
import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import { Panels } from './components/Panels';

type Lang = 'de' | 'en';

const readHash = (): TabId => {
  const hash = window.location.hash.replace('#', '');
  return isTabId(hash) ? hash : 'overview';
};

const readLang = (): Lang => {
  try {
    return localStorage.getItem('cv-lang') === 'en' ? 'en' : 'de';
  } catch {
    return 'de';
  }
};

export default function App() {
  const [lang, setLang] = useState<Lang>(readLang);
  const [tab, setTab] = useState<TabId>(readHash);
  const cv = dict[lang];

  useEffect(() => {
    const onHashChange = () => setTab(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cv-lang', lang);
    } catch {
      /* storage unavailable */
    }
    document.documentElement.lang = lang;
    document.title = cv.title;
  }, [lang, cv.title]);

  const selectTab = (id: TabId) => {
    setTab(id);
    if (id === 'overview') {
      if (window.location.hash) window.location.hash = '';
    } else if (window.location.hash !== `#${id}`) {
      window.location.hash = id;
    }
  };

  return (
    <div className="container">
      <div className="topbar">
        <div className="lang-switch" role="group" aria-label="Language / Sprache">
          {(['de', 'en'] as const).map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn${lang === code ? ' is-active' : ''}`}
              aria-pressed={lang === code}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <Header cv={cv} />
      <TabNav cv={cv} active={tab} onSelect={selectTab} />
      <Panels cv={cv} active={tab} />

      <footer>
        <span>{cv.footer.name}</span>
        <span>{cv.footer.updated}</span>
      </footer>
    </div>
  );
}
