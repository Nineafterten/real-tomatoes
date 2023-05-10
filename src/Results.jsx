import Entry from "./Entry";

const Results = ({ entry }) => {
  entry = entry && entry.length ? JSON.parse(entry) : {};
  console.log('build result', entry);
  return (    
    <div className="search">
      {entry ? (
          <Entry
            name={entry.name}
            key={entry.id}
            image={entry.image}
            locations={entry.common_locations}
            description={entry.description}
            category={entry.category}
            drops={entry.drops}
            attack={entry.attack}
            defense={entry.defense}
            hearts={entry.hearts_recovered}
            cooking={entry.cooking_effect}
            id={entry.id}
          />
      ) : (
        <h4>No results found</h4>
      )}
    </div>
  );
};

export default Results;
