import React from "react";
import "./App.css";
import { FaFile, FaFolder } from "react-icons/fa";

const App = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((item) => {
          if (item.type === "file") {
            return (
              <li>
                <FaFile /> {item.name}
              </li>
            );
          }

          return (
            <li>
              <FaFolder style={{ color: "red" }} /> {item.name}
              <App data={item.children} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
