import { useMyCustomContextApi } from "../hooks/custom";
import { formatPrice } from "../utils/utils";

const SingleCartProduct = ({ product }) => {
  const { dispatch } = useMyCustomContextApi();

  const {
    fields: { image, name, price },
    count,
  } = product;

  return (
    <article className="cart-item">
      <img src={image[0].url} className="cart-item-img" alt="high-back bench" />
      <div>
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>
        <button
          onClick={() => dispatch({ type: "removeProductFromCart", product })}
          className="cart-item-remove-btn"
        >
          remove
        </button>
      </div>

      <div>
        <button
          onClick={() =>
            dispatch({ type: "increaseCartProductCount", product })
          }
          className="cart-item-increase-btn"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">{count}</p>
        <button
          onClick={() =>
            dispatch({ type: "decreaseCartProductCount", product })
          }
          className="cart-item-decrease-btn"
        >
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;
