import { useEffect, useState } from 'react';
import type { Cv } from '../data';
import photo from '../assets/photo.webp';

function useTypewriter(text: string, speed = 55, startDelay = 400) {
  const [shown, setShown] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown('');
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval!);
    };
  }, [text, speed, startDelay]);

  return { shown, done };
}

export function Header({ cv }: { cv: Cv }) {
  const { shown, done } = useTypewriter(cv.role);

  return (
    <header className="header">
      <div className="photo-box">
        <img className="profile-photo" src={photo} alt={`${cv.nameFirst} ${cv.nameLast}`} />
      </div>

      <div className="name-block">
        <h1>
          {cv.nameFirst} <span>{cv.nameLast}</span>
        </h1>
        <div className="role-line">
          {shown}
          {!done && <span className="cursor" />}
        </div>
        <div className="role-gh">
          <a href={`https://${cv.linkedin}`} target="_blank" rel="noreferrer">
            <svg className="icon" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
            {cv.linkedin}
          </a>
        </div>
        <div className="role-gh">
          <a href={`https://${cv.github}`} target="_blank" rel="noreferrer">
            <svg className="icon" viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.94 3.2 9.13 7.65 10.61.56.1.77-.24.77-.54 0-.27-.01-1.15-.02-2.09-3.11.68-3.77-1.32-3.77-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .3.2.65.78.54A11.5 11.5 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
            {cv.github}
          </a>
        </div>
      </div>

      <ul className="contact-list">
        {cv.contacts.map((contact) => (
          <li key={contact.text}>
            <span className="k">{contact.icon}</span>{' '}
            {contact.href ? (
              <a href={contact.href}>{contact.text}</a>
            ) : (
              contact.text
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
