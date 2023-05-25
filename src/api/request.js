// ========= File request ==========
import axios from "axios";
import Cookies from "js-cookie";

// const baseUrl = "https://c4d9-113-23-122-165.ngrok-free.app";
const baseUrl = "http://localhost:8080";
const login_path = "/api/auth/login";

axios.interceptors.request.use((req) => {
  const jwt = Cookies.get("jwt");
  const newUrl = baseUrl + req.url;
  const Authorization = login_path === req.url ? undefined : `Bearer ${jwt}`;
  return {
    ...req,
    url: newUrl,  
    headers: {
      ...req.headers,
      Authorization,
      "ngrok-skip-browser-warning": "1",
    },
  };
});

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
