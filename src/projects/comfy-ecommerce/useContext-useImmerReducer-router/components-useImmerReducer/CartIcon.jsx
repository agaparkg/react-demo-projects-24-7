import { useMyCustomContextApi } from "../hooks/custom";

function CartIcon() {
  const { state, dispatch } = useMyCustomContextApi();

  const cartCount = state.cartProducts.reduce(
    (sum, product) => sum + product.count,
    0
  );

  return (
    <div className="toggle-container">
      <button
        onClick={() => dispatch({ type: "setShowCart" })}
        className="toggle-cart"
      >
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
