import { useImmerReducer } from "use-immer";
import { data } from "../assets/products-data";
import { getStorageItem } from "../utils/utils";

const initialState = {
  isLoading: false,
  showNavBar: false,
  showCart: false,
  showCheckout: false,
  products: data,
  cartProducts: getStorageItem("cartProducts"),
  featuredProducts: data.filter((product) => product.fields.featured),
};

const reducers = (state, action) => {
  switch (action.type) {
    case "addProductToCart": {
      const currProduct = state.cartProducts.find(
        (cp) => cp.id === action.product.id
      );

      if (currProduct) {
        currProduct.count++;
      } else {
        state.cartProducts.push({ ...action.product, count: 1 });
      }
      return;
    }
    case "removeProductFromCart": {
      state.cartProducts = state.cartProducts.filter(
        (cp) => cp.id !== action.product.id
      );
      return;
    }
    case "increaseCartProductCount": {
      const currProduct = state.cartProducts.find(
        (cp) => cp.id === action.product.id
      );
      currProduct.count++;
      return;
    }
    case "decreaseCartProductCount": {
      const currProduct = state.cartProducts.find(
        (cp) => cp.id === action.product.id
      );
      currProduct.count--;
      return;
    }
    case "setShowCart": {
      state.showCart = !state.showCart;
      return;
    }
    case "setShowNavBar": {
      state.showNavBar = !state.showNavBar;
      return;
    }
    case "setShowCheckout": {
      state.showCheckout = !state.showCheckout;
      return;
    }
    case "setIsLoading": {
      state.isLoading = action.payload;
      return;
    }
  }
};

export const useMyUseReducerCustomHook = () =>
  useImmerReducer(reducers, initialState);
