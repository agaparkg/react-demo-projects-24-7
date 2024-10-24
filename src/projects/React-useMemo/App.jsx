import React, { useMemo, useState } from "react";
import "./App.css";
import { initialItems } from "./utils/utils";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");
  const [items, setItems] = useState(initialItems);

  const selectedItem = useMemo(
    () =>
      items.find((item) => {
        console.log("run useMemo", item.id);
        return item.id === count;
      }),
    [items, count]
  );

  // useEffect, useCallback

  return (
    <div className="App">
      <h1>Count - {count}</h1>
      <h1>Selected Item: {selectedItem.id}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <button onClick={() => setName("Peter")}>Customer name: {name}</button>
    </div>
  );
};

export default App;
