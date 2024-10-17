import { useState } from 'react';

const SearchTopic = ({ setTopic }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert("Por favor, ingrese un tópico.")
      return;
    }
    setTopic(query);
  };

  return (
    <form className="d-flex w-auto mb-2 mb-lg-0" role="search" onSubmit={handleSubmit}>
      <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Buscar por tópico" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-light" type="submit">Buscar</button>
    </form>
  );
}

export default SearchTopic;
