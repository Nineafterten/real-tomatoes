const Entry = (props) => {
  const { name, image, id, locations, description, drops, attack, defense, hearts, cooking } = props;

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
                <div className="location-container">
                    <h5>Locations:</h5>
                    {locations && locations.length ? (<p>{locations.join(', ')}</p>) : (<p>Location unknown</p>)}
                </div>
                {drops && drops.length ? (
                    <div className="drops-container">
                        <h5>Loot drops:</h5>
                        <p>{drops.join(', ')}</p>
                    </div>
                    ) : ('')
                }
                {attack || defense ? (
                    <div className="equipment-container">
                        <div className="attack"><i className="fa fa-fw fa-hammer" alt="attack"></i> {attack || 0}</div>
                        <div className="defense"><i className="fa fa-fw fa-shield" alt="defense"></i> {defense || 0}</div>
                    </div>
                    ) : ('')
                }
                {hearts || cooking ? (
                    <div className="cooking-container">
                        <div className="hearts"><i className="fa fa-fw fa-heart" alt="hearts"></i> {hearts}</div>
                        <div className="bonus"><i className="fa fa-fw fa-circle-up" alt="bonus"></i> {cooking}</div>
                    </div>
                    ) : ('')
                }
            </div>) :
            (
                <h5 className="empty-entry">Please select a category/entry</h5>
            )
        }
      </div>
  );
};

export default Entry;
