import React, { useState } from "react";
import "./App.css";
import MemoizedChildComp from "./ChildComp";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  console.log("App.jsx Parent Component Rendering");

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Peter")}>Change Name</button>
      <MemoizedChildComp name={name} />
    </div>
  );
};

export default App;
