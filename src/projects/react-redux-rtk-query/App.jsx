import React from "react";
import { Provider } from "react-redux";
import ItemsList from "./components/ItemsList";
import { store } from "./redux-store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ItemsList />
      </div>
    </Provider>
  );
};

export default App;
