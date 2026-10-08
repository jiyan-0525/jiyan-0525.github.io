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
          <span className="k">◉</span>{' '}
          <a href={`https://${cv.linkedin}`} target="_blank" rel="noreferrer">
            {cv.linkedin}
          </a>
        </div>
        <div className="role-gh">
          <span className="k">◉</span>{' '}
          <a href={`https://${cv.github}`} target="_blank" rel="noreferrer">
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
