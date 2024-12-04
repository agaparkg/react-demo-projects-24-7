import React from "react";
import { allProducts } from "../../../assets/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      {allProducts.map((product) => {
        return <ProductCard key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
