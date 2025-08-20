import axios from "axios";
import { useState } from "react";

export const useProducts = () => {
  const endpoint = "http://localhost:3001/products";

  // Création d'une instance d'axios
  const api = axios.create({
    baseURL: endpoint,
  });

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return axios
      .get(endpoint)
      .then((resp) => {
        setProducts(resp.data);
        return resp;
      })
      .catch((err) => {
        throw err;
      });
  };

  return { getProducts, products };
};