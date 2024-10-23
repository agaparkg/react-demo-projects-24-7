import React, { useEffect, useRef, useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0);

  // count = 0

  const ref1 = useRef(null); // { current: 0}
  const ref2 = useRef(null); // { current: 0}
  const ref3 = useRef(null); // { current: 0}

  useEffect(() => {
    console.log("COMPONENT RENDERED");
    // hit the api end point
    // handle side effects
  });

  const changeCount = () => {
    console.log(ref1);
    ref1.current.focus();
    ref1.current.style.backgroundColor = "yellow";
    console.log(ref1.current.value);

    ref1.current.value = "";
  };

  return (
    <div>
      <button onClick={changeCount}>Increase</button>
      <input type="text" ref={ref1} />
      <input type="text" ref={ref2} />
      <input type="text" ref={ref3} />
    </div>
  );
};

export default App;
