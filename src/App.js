import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ItemComponent from "./pages/item";
import LoginComponent from "./pages/login";
import ItemDetail from "./pages/item-detail";
function App() {
  return (
    <>
      <Navbar />
      <div className="contianer">
        <Routes>
          <Route path="/items" element={<ItemComponent />} />
          {/* <Route  path="/" element={ItemComponent}   /> */}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/item-detail/:_id" element={<ItemDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
