// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => setCartItems([]);

  return (
    <>
      <Header />
      <Hero />
      <Menu addToCart={addToCart} />
      <Cart items={cartItems} removeItem={removeFromCart} clearCart={clearCart} />
      <Footer />
    </>
  );
}

export default App;