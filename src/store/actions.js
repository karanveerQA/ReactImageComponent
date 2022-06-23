import { dataActions } from "./data";

export const fetchImages = () => {
  return async (dispatch) => {
    const response = await fetch("/api/v1/getTechnologyData");
    const data = await response.json();
    dispatch(dataActions.setInitialState(data.data));
  };
};

export const updateLikeCount = (payload) => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/update/likecount",
      {
        method: "put",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ id: payload.id, likeCount: payload.likeCount }),
      }
    );
    const data = await response.json();

    console.log(data.success);

    dispatch(
      dataActions.like({ id: payload.id, likeCount: payload.likeCount })
    );
  };
};

export const updateDislikeCount = (payload) => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/update/dislikecount",
      {
        method: "put",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          id: payload.id,
          dislikeCount: payload.dislikeCount,
        }),
      }
    );
    const data = await response.json();

    console.log(data.success);

    dispatch(
      dataActions.dislike({
        id: payload.id,
        dislikeCount: payload.dislikeCount,
      })
    );
  };
};
