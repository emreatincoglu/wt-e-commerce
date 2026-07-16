export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADRESS = "SET_ADRESS";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";

export function setCart(cart) {
  return {
    type: SET_CART,
    payload: cart,
  };
}

export function setPayment(payment) {
  return {
    type: SET_PAYMENT,
    payload: payment,
  };
}

export function setAdress(adress) {
  return {
    type: SET_ADRESS,
    payload: adress,
  };
}

export function updateCartItemCount(productId, count) {
  return {
    type: UPDATE_CART_ITEM_COUNT,
    payload: { productId, count },
  };
}

export function removeCartItem(productId) {
  return {
    type: REMOVE_CART_ITEM,
    payload: productId,
  };
}

export function toggleCartItem(productId) {
  return {
    type: TOGGLE_CART_ITEM,
    payload: productId,
  };
}


