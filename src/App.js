import React from "react";
import "./index.css";
import Navbar from "./component/navbar";
import Journal from "./component/journal";
import data from "./data";

function App() {
  const journals = data.map((items) => {
    return <Journal item={items} />;
  });
  return (
        <div className="container">
          <Navbar />
          <div className="journal--container">{journals}</div>
        </div>
  );
}

export default App;
