import "./App.css";
import { useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  useEffect(() => {
    document.title = "AYUSH VERMA";
  }, []);

  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
