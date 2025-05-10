// src/components/Menu.js
import React from "react";

const menuItems = [
  { name: "Thieboudienne", price: 15, desc: "Traditional fish and vegetable rice dish." },
  { name: "Yassa", price: 12, desc: "Grilled chicken marinated with onions and lemon." },
  { name: "Maffe", price: 14, desc: "Rich peanut stew served with rice and meat." },
  { name: "Thiebouyapp", price: 16, desc: "Seasoned rice with succulent lamb." },
  { name: "Thiebouginaar", price: 18, desc: "Seasoned rice with tender chicken." }
];

export default function Menu({ addToCart }) {
  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">Explore Our Delicious Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.name} className="menu-card">
            <h3>{item.name}</h3>
            <p>${item.price} - {item.desc}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}