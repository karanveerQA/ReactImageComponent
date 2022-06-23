import React from "react";
import classes from "./TechnologyComponent.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "./store/data";
import { updateLikeCount, updateDislikeCount } from "./store/actions";
const TechnologyComponent = (props) => {
  const dispatch = useDispatch();
  const changeLikeHandler = () => {
    // dispatch(
    //   dataActions.like({ ...props.data, likeCount: props.data.likeCount + 1 })
    // );

    dispatch(
      updateLikeCount({ id: props.data.id, likeCount: props.data.likeCount })
    );
  };
  const changeDislikeHandler = () => {
    // dispatch(
    //   dataActions.dislike({
    //     ...props.data,
    //     dislikeCount: props.data.dislikeCount + 1,
    //   })
    // );
    dispatch(
      updateDislikeCount({
        id: props.data.id,
        dislikeCount: props.data.dislikeCount,
      })
    );
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

export default TechnologyComponent;
