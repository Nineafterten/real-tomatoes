import { useState, useEffect } from "react";

const localCache = {};

export default function useEntryList(category) {
  const [entryList, setEntryList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!category) {
      setEntryList([]);
    } else if (localCache[category]) {
      setEntryList(localCache[category]);
    } else {
      requestEntries();
    }

    async function requestEntries() {
      setEntryList([]);
      setStatus("loading");
      let param = category === "Food" ? "creatures" : category.toLowerCase();
      let resultData;
      const result = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/category/${param}`
      );
      const json = await result.json();
      resultData = json.data;
      // Creatures has a sub category for food/non-food
      if (category === "Food") {
        resultData = resultData.food;
      } else if (category === "Creatures") {
        resultData = resultData.non_food;
      }
      console.log("entryList", resultData);
      localCache[category] = resultData || [];
      setEntryList(localCache[category]);
      setStatus("loaded");
    }
  }, [category]);

  return [entryList, status];
}
