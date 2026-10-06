import type { Cv } from '../data';
import photo from '../assets/photo.webp';

export function Header({ cv }: { cv: Cv }) {
  return (
    <header className="header">
      <div className="photo-box">
        <img className="profile-photo" src={photo} alt={`${cv.nameFirst} ${cv.nameLast}`} />
      </div>

      <div className="name-block">
        <h1>
          {cv.nameFirst} <span>{cv.nameLast}</span>
        </h1>
        <div className="role-line">{cv.role}</div>
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
