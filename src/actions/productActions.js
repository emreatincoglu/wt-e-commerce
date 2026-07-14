import instance from "../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_SORT_STATE = "SET_SORT_STATE"

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function setProductList(productList) {
  return {
    type: SET_PRODUCT_LIST,
    payload: productList,
  };
}

export function setTotal(total) {
  return {
    type: SET_TOTAL,
    payload: total,
  };
}

export function setFetchState(fetchState) {
  return {
    type: SET_FETCH_STATE,
    payload: fetchState,
  };
}

export function setLimit(limit) {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
}

export function setOffset(offset) {
  return {
    type: SET_OFFSET,
    payload: offset,
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}

export function setSortState(sort) {
  return {
    type: SET_SORT_STATE,
    payload: sort,
  };
}

export const getCategories = () => (dispatch) => {
  instance.get("/categories")
    .then((response) => {
      dispatch(setCategories(response.data));
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
};
export const getProducts = (categoryId, filter, sort) => (dispatch) => {
  const queryParams = {};

  if (categoryId) queryParams.category = categoryId;
  if (filter) queryParams.filter = filter;
  if (sort) queryParams.sort = sort;

  instance.get("/products", { params: queryParams })
    .then((response) => {
      dispatch(setProductList(response.data.products));
      dispatch(setTotal(response.data.total));
      dispatch(setFetchState('FETCHED'));
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};