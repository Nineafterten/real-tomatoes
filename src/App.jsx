import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div className="row">
      <h1 className="page-title">Resources of the Wild</h1>
      <h2 className="page-subtitle">A Hyrule Compendium Web Application</h2>
      <SearchParams />
      <footer className="credits">
        <a href="https://github.com/Nineafterten/resources-of-the-wild">
          <i className="fa-brands fa-fw fa-github"></i> UI Developed by: Doug Greene
        </a>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
