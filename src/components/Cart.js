// src/components/Cart.js
import React from "react";

export default function Cart({ items, removeItem, clearCart }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div>
        {items.length === 0 ? <p>No items added.</p> : (
          items.map(item => (
            <div key={item.name} className="cart-item">
              <span>{item.name} x{item.quantity}</span>
              <span>
                ${item.price * item.quantity} <button onClick={() => removeItem(item.name)}>&times;</button>
              </span>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">Total: ${total.toFixed(2)}</div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}