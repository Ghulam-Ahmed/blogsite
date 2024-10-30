import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("#FFD700"); // Initial color is black

  const changeColor = () => {
    // Change color to a new one
    setColor(color === "black" ? "blue" : "black");
  };

  return (
    <div>
      <h1 style={{ color: color }}>This is a color-changing H1 tag</h1>
      <button className="btn btn-primary" onClick={changeColor}>Change Color</button>
    </div>
  );
}
