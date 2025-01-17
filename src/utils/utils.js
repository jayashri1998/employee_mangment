
export const saveToken = (token) => {
    localStorage.setItem("token", token);
  };
  export const getToken = () => {
    return localStorage.getItem("token");
  };
  export const saveTokenWithExpiry = (token, expiryTime) => {
    const expiryDate = Date.now() + expiryTime;
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiry", expiryDate);
  };
  export const isTokenExpired = () => {
    const expiryDate = localStorage.getItem("tokenExpiry");
    return !expiryDate || Date.now() > Number(expiryDate);
  };
  export const refreshToken = () => {
    if (isTokenExpired()) {
      const newToken = "newDummyJWTToken_" + Math.random().toString(36).substring(7);
      console.log(newToken);
      saveTokenWithExpiry(newToken, 5 * 60 * 1000);
      return newToken;
    }
    return getToken();
  };
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
  };
  