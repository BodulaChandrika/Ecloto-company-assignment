import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            
            <h3 className="head">{product.name}</h3>
            <p className="para">₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
