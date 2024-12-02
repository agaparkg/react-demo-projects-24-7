import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../assets/products";

const ProductDetails = () => {
  const { id, id2 } = useParams();
  const navigate = useNavigate();

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.fields.name}</h1>
      <img src={product.fields.image[0].url} alt="" width={200} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
        consectetur alias ipsa fugit consequuntur soluta tenetur, recusandae
        deleniti sapiente asperiores nulla. Impedit quae consequuntur molestiae
        facilis doloremque quia at architecto!
      </p>
      <div>
        <button onClick={() => navigate("/api/v1/products")}>Go back</button>
        <Link to="/api/v1/products">Go Back</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
