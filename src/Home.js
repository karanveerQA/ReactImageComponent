import React, { useState } from "react";
import Menu from "./Menu.js";
import { Routes, Route } from "react-router-dom";
import ImageComponent from "./ImageComponent.js";
import classes from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "user 1",
      img: "./images/tiger.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
    {
      id: 2,
      name: "user 2",
      img: "./images/tiger2.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
    {
      id: 3,
      name: "user 3",
      img: "./images/tiger3.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
    {
      id: 4,
      name: "user 4",
      img: "./images/tiger4.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
    {
      id: 5,
      name: "user 5",
      img: "./images/tiger5.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
    {
      id: 6,
      name: "user 6",
      img: "./images/tiger6.jpg",
      likeCount: 0,
      dislikeCount: 0,
    },
  ]);

  const updateData = (obj) => {
    const array = data.map((el) => {
      if (el.id === obj.id) {
        return { ...obj };
      }
      return { ...el };
    });

    setData(array);
  };

  return (
    <div className={classes.grid_container}>
      {data.map((el) => (
        <ImageComponent data={el} key={el.id} updateData={updateData} />
      ))}

      {/* <Routes>
        <Route path="/page1" element={<h1>Page1</h1>} />
      </Routes> */}
    </div>
  );
};

export default Home;
