import instance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { setAdressList } from "./clientActions";

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

const setAddressAuthToken = (getState) => {
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
  if (!setAddressAuthToken(getState)) {
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
  if (!setAddressAuthToken(getState)) {
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
  if (!setAddressAuthToken(getState)) {
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
  if (!setAddressAuthToken(getState)) {
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
