import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../public/hiddenSearchBar.css";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <section
      onClick={handleClick}
      className="container"
      style={{ backgroundColor: bgColor }}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};
export default HiddenSearchBar;
