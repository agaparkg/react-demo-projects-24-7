import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ fields, id }) => {
  return (
    <div style={{ border: "1px solid grey", padding: "10px", margin: "20px" }}>
      <img src={fields.image[0].url} alt="" width={100} />
      <p>{fields.name}</p>
      <div>
        <Link to={`/api/v1/products/${id}/new/id2-${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
