import { useState, useEffect } from 'react';
import Item from './Item';

const Board = ({ language, topic }) => {
  const [allNews, setAllNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = `https://newsapi.org/v2/everything?q=${topic}&language=${language}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(api)
      .then(response => response.json())
      .then(data => {
        const filteredNews = data.articles.filter(article => 
          article.title && 
          article.description && 
          article.urlToImage && 
          article.url
        );

        setAllNews(filteredNews);
        setDisplayedNews(filteredNews.slice(0, 10));
      });
  }, [language, topic]);

  const loadMoreNews = () => {
    if (loading || displayedNews.length >= allNews.length) return;

    setLoading(true);
    setTimeout(() => {
      const nextNews = allNews.slice(displayedNews.length, displayedNews.length + 10);
      setDisplayedNews((prev) => [...prev, ...nextNews]);
      setLoading(false);
    }, 3500);
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      loadMoreNews();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedNews, loading]);

  return (
    <div className="container-fluid">
      <div className="row">
        {displayedNews.map((item, index) => (
          <div className="col-md-3 col-12 py-2" key={index}>
            <Item
              title={item.title}
              description={item.description}
              url={item.url}
              src={item.urlToImage}
              site={item.source.name}
              author={item.author}
            />
          </div>
        ))}
      </div>
      {loading && (
        <div className="d-flex align-items-center p-4">
          <h1>Cargando más noticias...</h1>
          <div className="spinner-border text-primaryyyyyy ms-auto" role="status">
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
