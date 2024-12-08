import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import store from "./redux/store";

const Counter = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(store.getState().counter.count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.count); // Update local state when store updates
    });

    return () => {
      unsubscribe(); // Clean up subscription when component unmounts
    };
  }, []);

  // const incrementHandler = () => store.dispatch(increment());
  // const decrementHandler = () => store.dispatch(decrement());

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => dispatch({ type: "counter/increment" })}>+</button> */}
      {/* <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
