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
        <div className="image-container five columns">
            <img src={hero} alt={title} />
        </div>
        {name ? (
            <div className="info-container seven columns">
                <h4>{title}</h4>
                <p>{description}</p>
                <h5>Locations:</h5>
                {locations && locations.length ? (
                    <ul>
                        {locations.map((lo) => (
                            <li key={lo}>{lo}</li>
                        ))}
                    </ul>
                ) : (
                    <ul>
                        <li>No locations found</li>
                    </ul>
                )}
            </div>) :
            (
                <h5 className="empty-entry">Please select a category/entry</h5>
            )
        }
      </div>
  );
};

export default Entry;
