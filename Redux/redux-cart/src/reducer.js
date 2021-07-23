import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions";

const reducer = (state, action) => {
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: (item.amount -= 1) };
        }

        return item;
      });
    }

    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: (item.amount += 1) };
      }

      return item;
    });

    return { ...state, cart: tempCart };
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

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;

        cartTotal.amount += amount;
        cartTotal.total += parseFloat((amount * price).toFixed(2));

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
