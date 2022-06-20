import React from "react";
import classes from "./ImageComponent.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
const ImageComponent = (props) => {
  const dispatch=useDispatch();
  const changeLikeHandler = () => {

    dispatch({type:'like',obj:{...props.data,likeCount:props.data.likeCount+1}});
   
  };
  const changeDislikeHandler = () => {
    dispatch({type:'like',obj:{...props.data,dislikeCount:props.data.dislikeCount+1}});
   
  };

  return (
    <div className={classes.card}>
      <p>{props.data.id}</p>
      <p>{props.data.name}</p>
      <img src={props.data.img} height="259" width="250"></img>
      <button className={classes.green_btn} onClick={changeLikeHandler}>
        like
      </button>
      <button className={classes.red_btn} onClick={changeDislikeHandler}>
        dislike
      </button>
      <div>
        <button className={classes.btn}>{props.data.likeCount}</button>
        <button className={classes.btn}>{props.data.dislikeCount}</button>
      </div>
    </div>
  );
};

export default ImageComponent;
