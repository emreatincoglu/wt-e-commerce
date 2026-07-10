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
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADRESS:
      return { ...state, adress: action.payload };
    default:
      return state;
  }
}
export default shoppingCartReducer;
