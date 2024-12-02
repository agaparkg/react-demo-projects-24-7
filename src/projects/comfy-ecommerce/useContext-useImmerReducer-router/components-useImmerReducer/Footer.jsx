import { useMyCustomContextApi } from "../hooks/custom";
import { formatPrice } from "../utils/utils";

function Footer() {
  const { state, dispatch } = useMyCustomContextApi();

  const totalCartPrice = state.cartProducts.reduce((sum, item) => {
    return sum + item.fields.price * item.count;
  }, 0);

  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button
        onClick={() => dispatch({ type: "setShowCheckout" })}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;
