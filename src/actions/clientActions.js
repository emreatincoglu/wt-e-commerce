import { toast } from "react-toastify";
import instance, { setAuthToken } from "../api/axiosInstance";


export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const GET_ROLES = "GET_ROLES";
export const SET_LOADING = "SET_LOADING"; // Yeni action type




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

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading,
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



export const verifyUser = () => (dispatch) =>{
  let token = localStorage.getItem('token');

if(token){
  setAuthToken(token)

  instance.get("/verify")
  .then((response) => {
    dispatch(setUser(response.data))
    localStorage.setItem('token', response.data.token)
    setAuthToken(response.data.token)
  })
   .catch((error) => {
      
      setAuthToken();
      localStorage.removeItem('token')
      console.log("not verified")
    
    })
}

}

export const loginUser = (userData, history, rememberMe = false) => (dispatch) => {
  
  instance.post("/login", userData)
    .then((response) => {
      const { token } = response.data;

      if (rememberMe && token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }

      if (token) {
        instance.defaults.headers.common.Authorization = token;
      }

      dispatch(setUser(response.data));
      toast.success("Login successful.");
      if (history.length > 2 && history.action !== "POP") {
        history.goBack(); 
      } else {
        history.push("/"); 
      }
      
    })
    .catch((error) => {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your information.");
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
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
  instance.get("/roles")
    .then((response) => {
      // 3. BAŞARILI DURUM: Gelen veriyi store'a yaz
      dispatch(setRoles([...response.data].reverse()));
    })
    .catch((error) => {
      // 4. HATA DURUMU: .catch bloğu dispatch'in değil, then bloğunun sonundadır
      console.error("Error fetching roles:", error);
    });
};
