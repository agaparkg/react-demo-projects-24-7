import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "./redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;

// const increment = () => {
//     return { type: "counter/increment" };
// }
