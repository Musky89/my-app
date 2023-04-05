import React, { useRef, useState, useEffect } from "react";
import "./DesignInterface.css";

const DesignInterface = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const draw = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      context.fillStyle = color;
      context.fillRect(x, y, 10, 10);
    };

    canvas.addEventListener("mousedown", draw);

    return () => {
      canvas.removeEventListener("mousedown", draw);
    };
  }, [color]);

  return (
    <div className="design-interface">
      <h2>Design Interface</h2>
      <canvas ref={canvasRef} width="600" height="400" className="canvas"></canvas>
      <div className="color-picker">
        <label htmlFor="color">Choose a color:</label>
        <input type="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  );
};

export default DesignInterface;
