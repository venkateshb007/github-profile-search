 import "./App.css";
import React from "react";
import GithubSearchApp from "./components/GithubSearchApp";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
        <a href="/" className="navbar-brand">
          Github-Profile-Search
        </a>
      </nav>

      <GithubSearchApp/>
    </div>
  );
};

export default App;
