import { useState } from "react";

const LanguageFilter = ({ setLanguage }) => {
  const [langLabel, setLangLabel] = useState('Todos');
  const handleChange = (lang, label) => {
    setLanguage(lang);
    setLangLabel(label);
  };

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Idioma de Noticias: {langLabel}
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" onClick={() => handleChange('en', 'Inglés')}>Inglés</a></li>
        <li><a className="dropdown-item" onClick={() => handleChange('es', 'Español')}>Español</a></li>
        <li><a className="dropdown-item" onClick={() => handleChange('fr', 'Francés')}>Francés</a></li>
        <li><a className="dropdown-item" onClick={() => handleChange('', 'Todos')}>Todos</a></li>
      </ul>
    </li>
  );
};

export default LanguageFilter;
