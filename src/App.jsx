import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Error from "./Component/Error";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  console.log("Sidebar state:", sidebar);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        {/* <Route path="/error" element={<Error/>}/> */}
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
