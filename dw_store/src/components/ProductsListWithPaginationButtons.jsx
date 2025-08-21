import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { MyTable } from "./MyTable";
import { Pagination } from "./Pagination";
import { SelectPagination } from "./SelectPagination";

export const ProductsListWithPaginationButtons = () => {

    const { getPaginate, loading, error } = useProducts();
    const [selectOption, setSelectOption] = useState([]);

    const [paginationParams, setPaginationParams] = useState({
        pageIdx : 1,
        itemPerPage : 10

    });

    const [responseApi, setResponseApi] = useState({
        first: 1,
        prev: null,
        next: null,
        last: null, // dernière page
        pages: null, // Nbr de pages total
        items: null, //Nbr total d'éléments en BDD
    });

    useEffect(() => {
        getPaginate(paginationParams.pageIdx, paginationParams.itemPerPage).then(
            (resp) => setResponseApi(resp.data)
        );
    }, [paginationParams]);

    const handleClickOnPagination = (pageNbr) => {
        setPaginationParams(prev => { 
            return {...prev, pageIdx: pageNbr}
        });
    };

    // useEffect utilisé pour recalculer les 'options' afficher par le <select></select>
    // On relance le calcul à chaque nouvelle réponse l'API (donc au chargement initial et à chaque changement )
    useEffect(() =>{
        const array = Array.from({length: responseApi.items}, (_, idx) => ({
            value: idx + 1,
            label: `Nombre d'éléments par page ${idx + 1}`
        }));
        setSelectOption(array);
    }, [responseApi]);

    const handleSelectChange = (nbrItems) =>{
        setPaginationParams({
            pageIdx: 1,
            itemPerPage: nbrItems,
        });
    }

    return (
        <>
        <MyTable data={responseApi.data}/>
        {responseApi.pages && (
            <Pagination nbrButton={responseApi.pages} handleClick={handleClickOnPagination}/>
        )}
        <div className="w-fit m-auto">
            <SelectPagination
            options={selectOption}
            onChangeFct={handleSelectChange}
            initialValue={paginationParams.itemPerPage}/>
        </div>

        </>
    );
}