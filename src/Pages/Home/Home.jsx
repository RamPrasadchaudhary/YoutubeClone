import React, { useState } from "react";
import "./Home.css";
import SideBar from "../../Component/SideBar/SideBar";
import Feed from "../../Component/Feed/Feed";

const Home = ({ sidebar }) => {
  console.log(sidebar); // Check the value of sidebar
  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
