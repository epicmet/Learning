import { DECREASE, INCREASE } from "./actions";

const reducer = (state, action) => {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  return state;
};

export default reducer;
