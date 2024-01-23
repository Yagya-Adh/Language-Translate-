import React from "react";
import "./App.css";
import LanguageApp from "./components/LanguageApp";
import Glass from "./glass/Glass";

function App() {
  return (
    <>
      <div className="flex justify-center my-3">
        {/* <LanguageApp /> */}

        <Glass />
      </div>{" "}
    </>
  );
}

export default App;
