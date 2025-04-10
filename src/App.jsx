import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProgressBar from "./ProgressBar";
import "./App.css"; // custom styles
//import laptopImg from "./assets/laptop.jpg";
//import phoneImg from "./assets/phone.jpg"; // used in PRODUCTS array
//import headphonesImg from "./assets/headphones.jpg";
//import watchImg from "./assets/smartwatch.jpg"; //

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300  },
  { id: 3, name: "Headphones", price: 100  },
  { id: 4, name: "Smartwatch", price: 150  },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      updateQuantity(product.id, existing.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) {
      removeItem(id);
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getSubtotal = () => {
    return cart
      .filter((item) => item.id !== FREE_GIFT.id)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = getSubtotal();

  useEffect(() => {
    setCart((currentCart) => {
      const hasGift = currentCart.find((item) => item.id === FREE_GIFT.id);
      if (subtotal >= THRESHOLD && !hasGift) {
        return [...currentCart, { ...FREE_GIFT, quantity: 1 }];
      } else if (subtotal < THRESHOLD && hasGift) {
        return currentCart.filter((item) => item.id !== FREE_GIFT.id);
      }
      return currentCart;
    });
  }, [subtotal]);

  return (
    <div className="app-container">
      <h1 className="heading">🛒 Shopping Cart</h1>
      <ProductList products={PRODUCTS} addToCart={addToCart} />
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <div className="cart-summary-details">
          <p className="subtotal">Subtotal: ₹{subtotal}</p>
          <hr className="horizon"/>
          <ProgressBar subtotal={subtotal} />
        </div>
        <h2>Cart Items</h2>
        <div className="cart-items">
           <Cart cart={cart} updateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  );
};

export default App;
