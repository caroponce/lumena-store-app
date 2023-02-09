import { useState,  useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../servise/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()


    useEffect(() => {
        (async() => {
            setLoading(true)
        const productsRef = collection(db, 'products')

        try {
            const snapshot = await getDocs(productsRef)
            const productosAdaptados = snapshot.docs.map(doc=> {
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
            setProducts(productosAdaptados)
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
       
        })()

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