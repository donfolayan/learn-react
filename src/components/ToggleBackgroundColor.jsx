import { useState } from "react";
import "../styles/toggleColor.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "white" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid {textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b"
          ? "Toggle White Theme"
          : "Toggle Black Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br /> Real World ...
        </h1>
      </section>
    </section>
  );
};
export default ToggleBackgroundColor;
