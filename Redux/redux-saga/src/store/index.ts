import { applyMiddleware, Reducer } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./saga";

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

// const devToolsMiddleware = composeWithDevTools(applyMiddleware());

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
