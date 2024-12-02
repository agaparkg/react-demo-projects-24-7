import React, { useEffect } from "react";
import { MyContext } from "../hooks/custom";
import { useMyUseReducerCustomHook } from "../reducers/customHook";
import { setStorageItem } from "../utils/utils";

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useMyUseReducerCustomHook();

  useEffect(() => {
    setStorageItem("cartProducts", state.cartProducts);
  }, [state.cartProducts]);

  const value = {
    state,
    dispatch,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default GlobalContextProvider;
