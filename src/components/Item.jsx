const Item = ({ title, description, url, src, site, author}) => {
  return (
    <div className="card text-center h-100">
      <div className="card-header bg-primary text-light">
        {site}
      </div>
      <img src={src} className="card-img-top p-2" alt={title} style={{height: "180px", objectFit: "cover"}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" className="btn btn-info">Ver más</a>
      </div>
      <div className="card-footer bg-primary text-light">
        {author}
      </div>
    </div>
  );
};

export default Item;
