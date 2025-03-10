import { composeWithDevTools } from "@redux-devtools/extension/";
import { createStore } from "redux";
import { moviesReducer } from "./movies/reducer";

export const store = createStore(moviesReducer, composeWithDevTools());
