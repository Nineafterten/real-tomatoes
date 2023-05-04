const Results = (props) => {
  const { title, images, id } = props;

  let hero = "";
  if (images && images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="entry">
      <div className="image-container">
        <img src={hero} alt={title} />
      </div>
      <div className="info">
        <h1>{title}</h1>
      </div>
    </a>
  );
};

export default Results;
