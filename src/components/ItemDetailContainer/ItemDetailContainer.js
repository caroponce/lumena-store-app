import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../servise/firebase/firebaseConfig"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {productId } = useParams()

    useEffect(() => {
        (async () => {
            const productRef = doc(db, 'products', productId)

            try {
                const snapshot = await getDoc(productRef)
    
                const fields = snapshot.data()
                const productAdapted = { id: snapshot.id, ...fields}
    
                setProduct(productAdapted)
            } catch (error) {
                console.log(error)
            } 
        })()
    }, [productId])

    return (
        <div>
            <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer