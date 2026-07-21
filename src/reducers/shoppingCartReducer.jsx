import {
  SET_CART,
  SET_PAYMENT,
  SET_ADRESS,
  UPDATE_CART_ITEM_COUNT,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  RESET_CART,
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
    case UPDATE_CART_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: Math.max(1, action.payload.count) }
            : item,
        ),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case TOGGLE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item,
        ),
      };
    case RESET_CART:
      return initialState;
    default:
      return state;
  }
}
export default shoppingCartReducer;
