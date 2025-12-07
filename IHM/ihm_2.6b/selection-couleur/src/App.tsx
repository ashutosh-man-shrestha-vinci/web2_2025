import { useState } from "react";

const colors = ["red", "green", "blue", "yellow", "violet"];

function App() {
  const [index, setIndex] = useState(0); // useState à l'intérieur

  const currentColor = colors[index];
  const nextColor = colors[(index + 1) % colors.length];

  const handleClick = () => {
    setIndex((index + 1) % colors.length);
  };

  return (
    <div
      style={{
        backgroundColor: currentColor,
        width: "200px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      <button onClick={handleClick}>{nextColor} - Click ici</button>
      <p>Current color: {currentColor}</p>
    </div>
  );
}

export default App;
