
import { useState } from "react";
import { useInstanceAxios } from "./useInstanceAxios";

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = import.meta.env.VITE_URL;

    const api = useInstanceAxios();

    // Rajouter une délai sur les réponses des requêtes
    api.interceptors.request.use(
        (config) => new Promise((resolve) => setTimeout(() => resolve(config), 1500))
    );

    const handleRequest = async(requestFunction, ...args) =>{
        setLoading(true);
        setError(null);
        try{
            const response = await requestFunction(...args);
            setProducts(response.data);
            setLoading(false);
            return response;
        } catch(e){
            setLoading(false);
            throw error;
        }
    }

    const getProducts = () => handleRequest(api.get, "/products");
    const getById =(id) => handleRequest(api.get, `/products/${id}`);
    const getPaginate = (pageIdx = 1, perPage = 10) =>{
        const url = `/products/?_page=${pageIdx}&_per_page=${perPage}`;
        return handleRequest(api.get, url);
    };

    const updateProduct = (product) => handleRequest(api.put, `/products/${product.id}`, product);
    
    return {
        getProducts,
        products,
        error,
        loading,
        getById,
        getPaginate,
        updateProduct
    };
}