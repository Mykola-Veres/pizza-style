import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    pizzasInCart: [],
  },
  reducers: {
    setPizzaInCart: (state, action) => {
      const findPizza = state.pizzasInCart.find(
        pizza => pizza.id === action.payload.id
      );
      if (findPizza) {
        findPizza.count++;
        state.totalPrice = state.totalPrice + findPizza.price;
      } else {
        state.pizzasInCart.push({ ...action.payload, count: 1 });
        state.totalPrice += action.payload.price;
      }
    },

    deletePizzaFromCart: (state, action) => {
      const findPizza = state.pizzasInCart.find(
        pizza => pizza.id === action.payload.id
      );
      if (!findPizza.count < 1) {
        findPizza.count -= 1;
        state.totalPrice -= action.payload.price;
      } else {
        state.pizzasInCart = state.pizzasInCart.filter(
          pizza => pizza.id !== action.payload.id
        );
      }
    },
    clearPizzasInCart: state => {
      state.pizzasInCart = [];
      state.totalPrice = 0;
    },
  },
});

export const { setPizzaInCart, deletePizzaFromCart, clearPizzasInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
