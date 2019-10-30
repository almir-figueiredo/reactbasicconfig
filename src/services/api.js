import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333" // este endereço muda conforme o endereço real da api
});

export default api;
