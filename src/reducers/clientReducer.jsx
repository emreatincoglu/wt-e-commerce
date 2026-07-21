import {
  SET_USER,
  SET_ROLES,
  SET_ADRESS_LIST,
  SET_CREDIT_CARDS,
  SET_ORDER_LIST,
  SET_THEME,
  SET_LANGUAGE,
  GET_ROLES,
  SET_LOADING,
} from "../actions/clientActions";

const initialState = {
  user: {},
  adressList: [],
  creditCards: [],
  orderList: [],
  roles: [],
  theme: "light",
  language: "en",
  loading: false,
};

const normalizeAdressList = (payload) => {
  if (!Array.isArray(payload)) {
    return [];
  }

  const addresses = payload.flat(Infinity).filter(
    (address) =>
      address &&
      typeof address === "object" &&
      !Array.isArray(address) &&
      address.id !== undefined &&
      address.id !== null,
  );

  return Array.from(
    new Map(addresses.map((address) => [address.id, address])).values(),
  );
};

const normalizeCreditCards = (payload) => {
  if (!Array.isArray(payload)) {
    return [];
  }

  const cards = payload.flat(Infinity).filter(
    (card) =>
      card &&
      typeof card === "object" &&
      !Array.isArray(card) &&
      card.id !== undefined &&
      card.id !== null,
  );

  return Array.from(new Map(cards.map((card) => [card.id, card])).values());
};

const normalizeOrderList = (payload) => {
  if (!Array.isArray(payload)) {
    return [];
  }

  const orders = payload.flat(Infinity).filter(
    (order) =>
      order &&
      typeof order === "object" &&
      !Array.isArray(order) &&
      order.id !== undefined &&
      order.id !== null,
  );

  return Array.from(new Map(orders.map((order) => [order.id, order])).values());
};

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ADRESS_LIST:
      return {
        ...state,
        adressList: normalizeAdressList(action.payload),
      };
    case SET_CREDIT_CARDS:
      return {
        ...state,
        creditCards: normalizeCreditCards(action.payload),
      };
    case SET_ORDER_LIST:
      return {
        ...state,
        orderList: normalizeOrderList(action.payload),
      };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    case GET_ROLES:
      return { ...state, roles: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default clientReducer;
