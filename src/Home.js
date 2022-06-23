import React, { useState } from "react";
import Menu from "./Menu.js";
import { Routes, Route } from "react-router-dom";
import TechnologyComponent from "./TechnologyComponent.js";
import classes from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "./store/actions.js";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  const data = useSelector((state) => {
    return state.dataReducer.items;
  });

  return (
    <div className={classes.grid_container}>
      {data.map((el) => (
        <TechnologyComponent data={el} key={el.id} />
      ))}

      {/* <Routes>
        <Route path="/page1" element={<h1>Page1</h1>} />
      </Routes> */}
    </div>
  );
};

export default Home;
