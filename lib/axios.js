import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://api2.blinkfix.me/api/v1/dashboard",
});

export default axiosFetch;
