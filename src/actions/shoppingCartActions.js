import instance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { setAdressList, setCreditCards, setOrderList } from "./clientActions";

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADRESS = "SET_ADRESS";
export const UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";
export const RESET_CART = "RESET_CART";

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

export function resetCart() {
  return {
    type: RESET_CART,
  };
}

const normalizeAddressList = (payload) => {
  if (!Array.isArray(payload)) {
    return [];
  }

  return payload
    .flat(Infinity)
    .filter(
      (address) =>
        address &&
        typeof address === "object" &&
        !Array.isArray(address) &&
        address.id !== undefined &&
        address.id !== null,
    );
};

const setUserAuthToken = (getState) => {
  const token = getState().client.user?.token;

  if (token) {
    instance.defaults.headers.common.Authorization = token;
  }

  return token;
};

const fetchAddressList = (dispatch) =>
  instance.get("/user/address").then((response) => {
    const addresses = normalizeAddressList(response.data);
    dispatch(setAdressList(addresses));
    return addresses;
  });

const syncAddressListFromResponse = (response, dispatch) => {
  if (Array.isArray(response.data)) {
    const addresses = normalizeAddressList(response.data);
    dispatch(setAdressList(addresses));
    return Promise.resolve(addresses);
  }

  return fetchAddressList(dispatch);
};

const isSameAddress = (address, addressData) =>
  ["title", "name", "surname", "phone", "city", "district", "neighborhood"].every(
    (field) => String(address?.[field] ?? "") === String(addressData?.[field] ?? ""),
  );

export const getUserAdress = () => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    dispatch(setAdressList([]));
    return Promise.resolve([]);
  }

  return fetchAddressList(dispatch).catch((error) => {
    console.error("Error fetching addresses:", error);
    toast.error("Addresses could not be loaded.");
    return [];
  });
};

export const createUserAddress = (addressData) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before adding an address.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .post("/user/address", addressData)
    .then((response) => syncAddressListFromResponse(response, dispatch))
    .then((addresses) => {
      const createdAddress =
        [...addresses].reverse().find((address) => isSameAddress(address, addressData)) ||
        addresses.at(-1);
      if (!createdAddress) {
        throw new Error("Created address was not returned by the API");
      }
      toast.success("Address added successfully.");
      return createdAddress;
    })
    .catch((error) => {
      console.error("Error creating address:", error);
      toast.error("Address could not be added.");
      throw error;
    });
};

export const updateUserAddress = (addressData) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before updating an address.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .put("/user/address", addressData)
    .then((response) => syncAddressListFromResponse(response, dispatch))
    .then((addresses) => {
      const updatedAddress = addresses.find((address) => address.id === addressData.id);
      if (!updatedAddress) {
        throw new Error("Updated address was not returned by the API");
      }
      toast.success("Address updated successfully.");
      return updatedAddress;
    })
    .catch((error) => {
      console.error("Error updating address:", error);
      toast.error("Address could not be updated.");
      throw error;
    });
};

export const deleteUserAddress = (addressId) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before deleting an address.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .delete(`/user/address/${addressId}`)
    .then((response) => syncAddressListFromResponse(response, dispatch))
    .then(() => {
      toast.success("Address deleted successfully.");
      return addressId;
    })
    .catch((error) => {
      console.error("Error deleting address:", error);
      toast.error("Address could not be deleted.");
      throw error;
    });
};

const normalizeCardList = (payload) => {
  if (!Array.isArray(payload)) {
    return [];
  }

  return payload
    .flat(Infinity)
    .filter(
      (card) =>
        card &&
        typeof card === "object" &&
        !Array.isArray(card) &&
        card.id !== undefined &&
        card.id !== null,
    );
};

const fetchCardList = (dispatch) =>
  instance.get("/user/card").then((response) => {
    const cards = normalizeCardList(response.data);
    dispatch(setCreditCards(cards));
    return cards;
  });

const syncCardListFromResponse = (response, dispatch) => {
  if (Array.isArray(response.data)) {
    const cards = normalizeCardList(response.data);
    dispatch(setCreditCards(cards));
    return Promise.resolve(cards);
  }

  return fetchCardList(dispatch);
};

const isSameCard = (card, cardData) =>
  ["card_no", "expire_month", "expire_year", "name_on_card"].every(
    (field) => String(card?.[field] ?? "") === String(cardData?.[field] ?? ""),
  );

export const getUserCards = () => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    dispatch(setCreditCards([]));
    return Promise.resolve([]);
  }

  return fetchCardList(dispatch).catch((error) => {
    console.error("Error fetching cards:", error);
    toast.error("Saved cards could not be loaded.");
    return [];
  });
};

export const createUserCard = (cardData) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before adding a card.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .post("/user/card", cardData)
    .then((response) => syncCardListFromResponse(response, dispatch))
    .then((cards) => {
      const createdCard =
        [...cards].reverse().find((card) => isSameCard(card, cardData)) ||
        cards.at(-1);
      if (!createdCard) {
        throw new Error("Created card was not returned by the API");
      }
      toast.success("Card added successfully.");
      return createdCard;
    })
    .catch((error) => {
      console.error("Error creating card:", error);
      toast.error("Card could not be added.");
      throw error;
    });
};

export const updateUserCard = (cardData) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before updating a card.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .put("/user/card", cardData)
    .then((response) => syncCardListFromResponse(response, dispatch))
    .then((cards) => {
      const updatedCard = cards.find(
        (card) => String(card.id) === String(cardData.id),
      );
      if (!updatedCard) {
        throw new Error("Updated card was not returned by the API");
      }
      toast.success("Card updated successfully.");
      return updatedCard;
    })
    .catch((error) => {
      console.error("Error updating card:", error);
      toast.error("Card could not be updated.");
      throw error;
    });
};

export const deleteUserCard = (cardId) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before deleting a card.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .delete(`/user/card/${cardId}`)
    .then((response) => syncCardListFromResponse(response, dispatch))
    .then(() => {
      toast.success("Card deleted successfully.");
      return cardId;
    })
    .catch((error) => {
      console.error("Error deleting card:", error);
      toast.error("Card could not be deleted.");
      throw error;
    });
};

export const createOrder = (orderData) => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    toast.error("You need to log in before creating an order.");
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .post("/order", orderData)
    .then((response) => {
      dispatch(resetCart());
      return response.data;
    })
    .catch((error) => {
      console.error("Error creating order:", error);
      toast.error(
        error.response?.data?.message ||
          "Your order could not be created. Please try again.",
      );
      throw error;
    });
};

export const getUserOrders = () => (dispatch, getState) => {
  if (!setUserAuthToken(getState)) {
    dispatch(setOrderList([]));
    return Promise.reject(new Error("Authentication required"));
  }

  return instance
    .get("/order")
    .then((response) => {
      const orders = Array.isArray(response.data)
        ? response.data.flat(Infinity).filter(
            (order) =>
              order &&
              typeof order === "object" &&
              !Array.isArray(order) &&
              order.id !== undefined &&
              order.id !== null,
          )
        : [];

      dispatch(setOrderList(orders));
      return orders;
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
      toast.error("Your previous orders could not be loaded.");
      throw error;
    });
};
