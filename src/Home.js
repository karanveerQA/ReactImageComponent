import React, { useState } from "react";
import Menu from "./Menu.js";
import { Routes, Route } from "react-router-dom";
import ImageComponent from "./ImageComponent.js";
import classes from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <div className={classes.grid_container}>
      {data.map((el) => (
        <ImageComponent data={el} key={el.id} />
      ))}

      {/* <Routes>
        <Route path="/page1" element={<h1>Page1</h1>} />
      </Routes> */}
    </div>
  );
};

export default Home;
