import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BasicModal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
