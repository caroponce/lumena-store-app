import { useState,  useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../servise/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


useEffect(() => {
    setLoading(true)
    
    const productosRef = collection(db, "products")
    const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
    getDocs(q)
        .then((resp) => {
            const newProd = resp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProducts( newProd )
        })
        .finally(() => {
            setLoading(false)
        })
    
}, [categoryId])

    if(loading) {
        return <h1> Buscando los productos </h1>
    }

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