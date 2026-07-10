export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const GET_ROLES = "GET_ROLES";
import axiosInstance from "../api/axiosInstance";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setRoles(roles) {
  return {
    type: SET_ROLES,
    payload: roles,
  };
}

export function setTheme(theme) {
  return {
    type: SET_THEME,
    payload: theme,
  };
}

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
}

// Thunk fonksiyonu dispatch'in yanında getState'i de parametre olarak alabilir
export const getRoles = () => (dispatch, getState) => {
  
  // 1. KONTROL AŞAMASI: Redux store'unda roller zaten var mı?
  // (State yolunu kendi reducer yapına göre uyarlayabilirsin, örneğin getState().client.roles)
  const currentRoles = getState().client.roles; 
  
  if (currentRoles && currentRoles.length > 0) {
    // Eğer dizinin içinde zaten eleman varsa, işlemi burada bitir (API'ye istek atma)
    return; 
  }

  // 2. İSTEK AŞAMASI: Eğer roller yoksa API'den çek
  axiosInstance.get("/roles")
    .then((response) => {
      // 3. BAŞARILI DURUM: Gelen veriyi store'a yaz
      dispatch({
        type: "SET_ROLES", // Veya action dosyasında tanımladığın değişken (örn: SET_ROLES)
        payload: [...response.data].reverse(), // API'den gelen veriyi payload olarak gönder
      });
    })
    .catch((error) => {
      // 4. HATA DURUMU: .catch bloğu dispatch'in değil, then bloğunun sonundadır
      console.error("Error fetching roles:", error);
    });
};
