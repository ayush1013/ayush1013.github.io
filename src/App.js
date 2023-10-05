import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "AYUSH VERMA";
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
