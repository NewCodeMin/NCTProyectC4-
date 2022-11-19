import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

    const searchHandler = (e) => {  // esta const llama al home ,home llama a getproducts,getproduct desde 
        e.preventDefault();        // desde su controlador tiene registrado todo  lo que tiene que ver 
        // con busquedas y filtros 
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        }
        else {
            navigate("/")
        }
    }
    
    console.log(keyword)

    return (
        <form onSubmit={searchHandler} class="d-flex " id="buscador" role="search" >
            <input 
            class="form-control me-2 id " 
            id="buscarnav" type="search" 
            placeholder="¿Qué buscas?" 
            aria-label="Search" 
            onChange={(e) => setKeyword(e.target.value)}
            />
            <button class="btn btn-success " id="buscarbotom" >Buscar</button>
        </form>
    );
};
export default Search;
