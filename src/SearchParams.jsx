import { useEffect, useState } from "react";
import Results from "./Results";
import useEntryList from "./useEntryList";

const SearchParams = () => {
  const CATEGORIES = ['Food','Creatures','Equipment','Materials','Monsters','Treasure'];
  const [category, setCategory] = useState("");
  const [entry, setEntry] = useState("");
  const [entryList] = useEntryList(category);

  useEffect(() => {
    requestEntries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestEntries() {
    let param = category === 'Food' ? 'creatures' : category.toLowerCase();
    let resultData;
    const result = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/${param}`)
    const json = await result.json();
    resultData = json.data;
    // Creatures has a sub category for food/non-food
    if (category === 'Food') {
      resultData = resultData.food;
    } else if (category === 'Creatures') {
      resultData = resultData.non_food;
    }
    console.log('entryList', resultData);
  }

  return (
    <div className="search-params">
      <label htmlFor="category">
        Category
        <select
          id="category"
          value={category}
          placeholder="Category"
          onChange={(e) => {
            setCategory(e.target.value);
            setEntry('');
            requestEntries(e.target.value);
          }}
        >
          <option />
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="entry">
          Entries
          <select
            disabled={!entryList.length}
            id="entry"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          >
            <option />
              {entryList.map((ent) => (
                <option key={ent.id} value={ent.name}>
                  {ent.name}
                </option>
              ))}
          </select>
        </label>
      <Results results={entry} />
    </div>
  );
};

export default SearchParams;
