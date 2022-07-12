import { applyMiddleware, Reducer } from "redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initial = { value: 0 };

const myReducer: Reducer = (state = initial, action) => {
  switch (action.type) {
    case "add":
      return { value: state.value + 1 };
    case "sub":
      const newVal = state.value - 1;
      return { value: newVal > 0 ? newVal : 0 };
    default:
      return state;
  }
};

const reducers = {
  main: myReducer,
};

export type ReducersType = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};

const devToolsMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(combineReducers(reducers), devToolsMiddleware);

export default store;
