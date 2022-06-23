import { createSlice } from "@reduxjs/toolkit";
const initialState = [
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
];
const dataSlice = createSlice({
  name: "data",
  initialState: { items: [] },
  reducers: {
    setInitialState(state, action) {
      //state = null;
      state.items = [...action.payload];
    },
    like(state, action) {
      //   return state.map((el) => {
      //     if (el.id === action.payload.id) {
      //       return { ...action.payload };
      //     }

      //     return { ...el };
      //   });

      for (const item of state.items) {
        if (item.id === action.payload.id) {
          item.likeCount = action.payload.likeCount + 1;
        }
      }
    },
    dislike(state, action) {
      //   return state.map((el) => {
      //     if (el.id === action.payload.id) {
      //       return { ...action.payload };
      //     }

      //     return { ...el };
      //   });
      for (const item of state.items) {
        if (item.id === action.payload.id) {
          item.dislikeCount = action.payload.dislikeCount + 1;
        }
      }
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
