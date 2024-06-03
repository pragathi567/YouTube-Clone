import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <BrowserRouter>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
