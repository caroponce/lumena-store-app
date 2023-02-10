import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../servise/firebase/firebaseConfig"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {productId } = useParams()

    
useEffect(() => {
    const docRef = doc(db, "products", productId)
    getDoc(docRef)
        .then((doc) => {
            setProduct( {id: doc.id, ...doc.data()} )
        })

}, [productId])


    return (
        <div>
            <ItemDetail {...product}/> 
        </div>
    )
}


export default ItemDetailContainer