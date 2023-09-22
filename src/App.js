import Navbar from "./Components/Navbar"
import React, { useEffect } from 'react';
import './App.css';

function App() {
  
  useEffect(()=>{
    document.title="AYUSH VERMA"
  },[])

  return (
    <div className="App">
      <Navbar/>

    </div>
  );
}

export default App;
