import axios from "axios";

export const appAxios = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export default appAxios;
