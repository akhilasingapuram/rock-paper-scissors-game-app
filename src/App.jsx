import { useState } from "react";
import "./RPSGame.css";
import RPSGame from "./RPSGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RPSGame />
    </>
  );
}

export default App;
