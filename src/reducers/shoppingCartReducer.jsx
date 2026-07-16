import {
  SET_CART,
  SET_PAYMENT,
  SET_ADRESS,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      const addedProduct = action.payload;

      const existingItem = state.cart.find(
        (item) => item.product.id === addedProduct.id,
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.product.id === addedProduct.id
            ? { ...item, count: item.count + 1 }
            : item,
        );

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newItem = {
          count: 1,
          checked: true,
          product: addedProduct,
        };

        return {
          ...state,

          cart: [...state.cart, newItem],
        };
      }
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADRESS:
      return { ...state, adress: action.payload };
    default:
      return state;
  }
}
export default shoppingCartReducer;
