import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
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

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (action.payload.id === item.id) {
          if (action.payload.toggle === "inc") {
            return (item = { ...item, amount: item.amount + 1 });
          } else if (action.payload.toggle === "dec") {
            return (item = { ...item, amount: item.amount - 1 });
          }
        }

        return item;
      }),
    };
  }

  return state;
};

export default reducer;
