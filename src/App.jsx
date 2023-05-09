import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="row">
      <h1 className="page-title">Resources of the Wild</h1>
      <h2 className="page-subtitle">A Hyrule Compendium</h2>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
