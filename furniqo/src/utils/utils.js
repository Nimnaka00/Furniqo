// Save token in browser cookie
export const setTokenCookie = (token) => {
    document.cookie = `token=${encodeURIComponent(token)}; path=/; max-age=${7 * 24 * 60 * 60}`;
  };
  
  // Get token from cookie
  export const getTokenCookie = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
  
    return token ? decodeURIComponent(token) : null;
  };
  
  // Clear token cookie
  export const clearTokenCookie = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  };
  