// src/components/Hero.js
import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ color: "black" }}>
      <h1>Welcome to Pikine!</h1>
      <p>Where Senegalese Excellence and its Cuisine meet</p>
      <a href="#menu">View Our Menu</a>
    </section>
  );
}