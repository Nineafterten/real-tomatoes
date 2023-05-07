const Entry = (props) => {
  const { name, image, id, locations } = props;

  let hero = "https://placehold.co/280x280";
  if (image && image.length) {
    hero = image;
  }
  console.log('build entry', props);

  return (
    <a href={`/details/${id}`} className="entry">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>{Array.isArray(locations) ? locations.join(', ') : ''}</p>
      </div>
    </a>
  );
};

export default Entry;
