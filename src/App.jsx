// src/App.jsx
import { Routes, Route } from "react-router-dom";   // ← no BrowserRouter here

import Navbar from "./Client/Navbar";
import Home from "./Client/Home";
import Items from "./Client/Items";          // your menu grid
import ItemDetail from "./Client/ItemDetail"; // detail page

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* If your menu grid is shown directly on home, it should be inside Home.jsx */}
        {/* If you want a separate /menu page: */}
        {/* <Route path="/menu" element={<Items />} /> */}
        
        <Route path="/menu/:id" element={<ItemDetail />} />
        
        {/* Optional 404 catch-all */}
        <Route path="*" element={<div className="text-white text-center py-20">404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;