const Entry = (props) => {
  const { name, image, id, locations, description } = props;

  let hero = 'https://placehold.co/280x280';
  if (image && image.length) {
    hero = image;
  }
  let title = 'N/A';
  if (name && name.length) {
    title = name.toUpperCase();
  }
  console.log('build entry', props);

  return (
    <div className="entry row" id={id}>
        <div className="image-container four columns">
            <img src={hero} alt={title} />
        </div>
        <div className="info eight columns">
            <h4>{title}</h4>
            <p>{description}</p>
            <h5>Locations:</h5>
            {locations && locations.length ? (
                <ul>
                    {locations.map((lo) => (
                        <li key={lo}>{lo}</li>
                    ))}
                </ul>
            ) : ('')}
        </div>
      </div>
  );
};

export default Entry;
