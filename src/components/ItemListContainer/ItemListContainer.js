import { useState,  useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect(() => {
     const asyncFunction = categoryId ? getProductsByCategory : getProducts

     asyncFunction(categoryId)
        .then(products => {
            setProducts(products)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])
    return (
        <div>
        <h1 className="greeting"> {greeting} </h1>
        <div className="lista-contenedora">
        <ItemList products={products}/>
        </div>
        </div>
    )
}

export default ItemListContainer;