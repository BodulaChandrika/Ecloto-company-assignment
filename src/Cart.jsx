import React from "react";

const Cart = ({ cart, updateQuantity }) => {
  if (cart.length === 0) {
    return (
       
    <div>
      <h4 className="empty-cart">Your cart is empty.</h4>
      <p className="empty-carts">Add some products to see them here!</p>
    </div>
    );
  }

  return (
    <div className="cart">
      {cart.map((item) => (
    
        <div key={item.id} className="cart-item">
          <div>
            <strong>{item.name}</strong>
            <p>
              ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
            </p>
          </div>
          {item.price > 0 ? (
            <div className="cart-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
          ) : (
            <span className="gift-badge">🎁 FREE GIFT</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cart;
