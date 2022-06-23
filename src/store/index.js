import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./data";
const store = configureStore({ reducer: { dataReducer: dataSliceReducer } });
export default store;
