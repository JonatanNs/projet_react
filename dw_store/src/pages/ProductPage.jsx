import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "../components/MyTable";

export const ProductPage = () => {
    const {getPaginate, products, loading, error} = useProducts();

    const [responseApi, setResponseApi] = useState({
        "first": 1,
        "prev": null,
        "next": null,
        "last": null, // dernière page
        "pages": null, // Nbr de pages total
        "items": null
    });

    useEffect(() =>{
        loadProducts();
    }, []);

    const loadProducts = (pageNbr) =>{
        getPaginate(pageNbr, 10).then((resp) => setResponseApi(resp.data));
    };

    useEffect(() =>{
        console.log(products);
    }, [products]);

    const handlePrev = ()=> {
        if(responseApi.prev) loadProducts(responseApi.prev);
    };
    const handleNext = ()=> {
        if(responseApi.next) loadProducts(responseApi.next);
    };

  return (
    <>
        <h1>Mes produits (avec pagination)</h1>
        <MyTable data={products.data}/>
        <div className="flex w-fit m-auto">
        <button disabled={!responseApi.prev} 
                onClick={handlePrev} 
                className="btn btn-primary ml-2">Précédent</button>
        {responseApi.data &&(
            <>
                Page n° {responseApi.prev ? responseApi.prev + 1: responseApi.next - 1}
            </>
            )}
        <button disabled={!responseApi.next}
                onClick={handleNext} 
                className="btn btn-primary ml-2">Suivant</button>
        </div>

        <section className="border-t mt-5">
            <h2>Exemple n°2</h2>
        </section>
    </>
  );
}