import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import JoiningPage from "./pages/JoiningPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <JoiningPage />
    </div>
  );
}

export default App;
