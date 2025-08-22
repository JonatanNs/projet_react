import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";

export const CartPage = () => {
    const products = useSelector((state) => state.cart.value);
  return (
    <>
      <h1>Mon panier de produits</h1>
      {products.length > 0 && products.map((p) => <ProductCard product={p}/> )}
    </>
  );
}