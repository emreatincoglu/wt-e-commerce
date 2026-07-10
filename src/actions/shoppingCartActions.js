export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADRESS = "SET_ADRESS";

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
