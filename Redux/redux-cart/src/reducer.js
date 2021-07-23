import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

const reducer = (state, action) => {
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  return state;
};

export default reducer;
