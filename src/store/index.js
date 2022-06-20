import { createStore } from "redux";

const counterReducer = (
  state = [
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
      likeCount: 2,
      dislikeCount: 0,
    },
  ],
  action
) => {
  if (action.type === "like") {
    return state.map((el) => {
      if (el.id === action.obj.id) {
        return { ...action.obj };
      }

      return { ...el };
    });
  }
  if (action.type === "dislike") {
    return state.map((el) => {
      if (el.id === action.obj.id) {
        return { ...action.obj };
      }

      return { ...el };
    });
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
