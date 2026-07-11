import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  GET_ROLES,
  SET_LOADING,
} from "../actions/clientActions";

const initialState = {
  user: {},
  adressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  loading: false,
};

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
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
