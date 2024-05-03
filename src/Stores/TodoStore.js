import {createStore} from "redux";
import {todosReducer} from "./TodoReducer";

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(todosReducer);