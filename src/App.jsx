import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Todos from "./Todos";
import store from "./redux/store";

const App = () => {
  return (
    <div>
      {/* <Router router={router} /> */}
      {/* <MyContext.Provider value={value}>{children}</MyContext.Provider> */}
      <Provider store={store}>
        <Counter />
        <Todos />
      </Provider>
    </div>
  );
};

export default App;
