import React from "react";
import "./App.css";
import data from "./assets/data";
import Helper from "./components/Helper";

const App = () => {
  return (
    <div className="wrapper">
      {data.length ? (
        <Helper data={data} />
      ) : (
        <p style={{ textAlign: "center" }}>No Data found</p>
      )}
    </div>
  );
};

export default App;
