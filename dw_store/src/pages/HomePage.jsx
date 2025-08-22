import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { Skeleton } from "../components/Skeleton";

export const HomePage = () => {

  const { getProducts, products, error, loading } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getProducts(); // SI on déplace le useState dans le hook
  };

  console.log([...Array(16).keys()]);

  return (
    <>
      <h1>Accueil</h1>

      <h2>Notre compteur redux</h2>

      <h2>Nos produits</h2>

      <div className="grid grid-cols-4 gap-4">
        {!loading ? (
          error ? (
            <p>Erreur de chargement des produits</p>
          ) : (
            products.map((p) => <ProductCard product={p} key={p.id} />)
          )
        ) : (
          [...Array(16).keys()].map((_, idx) => <Skeleton key={idx}/>)
        )}
      </div>
    </>
  );
};