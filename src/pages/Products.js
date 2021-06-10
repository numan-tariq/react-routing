import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">Mobile Phone</Link>
        </li>
        <li>
          <Link to="/products/3">Laptop</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
