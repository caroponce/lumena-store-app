import { addDoc, getDocs, writeBatch, query, collection, where, documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../servise/firebase/firebaseConfig"
import './Checkout.css'

const Checkout = () => {

    const { cart, totalPrice, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)

    const [nombre, setNombre] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')


    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    nombre,
                    tel,
                    email
                },
                items: cart,
                totalPrice
            }

            const batch = writeBatch(db)

            const ids = cart.map(prod => prod.id)
            

            const prodRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const prodAdded = await getDocs(prodRef)
            const { docs } = prodAdded

            const outOfStock = []

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCant = productAddedToCart.count

                if (stockDb >= prodCant) {
                    batch.update(doc.ref, {
                        stock: stockDb - prodCant
                    })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()                
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                const { id } = orderAdded
                setOrderId(id)
                vaciarCarrito()                
            } else {
                console.error('productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h3> Esperando confirmación </h3>
    }

    if (orderId) {
        return (
            <div>
                <h4 className="mes-agra"> Gracias por tu compra</h4>
                <div>
                    <div >
                        <h5 className="nro-segui">Tu numero de seguimiento es: {orderId}</h5>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>

        )
    }

    if (cart.length === 0) {
        return (
            <div>
                <h4>No hay productos en el carrito</h4>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === '' || email === '' || tel === '' || email2 === '') {
            console.log("Complete este campo para poder finalizar");
        } else if (email !== email2) {
            console.log("no coinciden los mails");
        } else {
            createOrder();
        }

    };

    return (
        <div>
            <h3 className="mensj-checkout">Completá los datos para realizar la compra</h3>
            <div>
            <form>
                <div>
                <input type="text" value={nombre} placeholder="Nombre y Apellido" onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                     <input type="number"  value={tel} placeholder="Teléfono" onChange={(e) => setTel(e.target.value)} required />
                </div>
                <div>
                     <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <input type="email" value={email2} placeholder="Repetir E-mail" onChange={(e) => setEmail2(e.target.value)} required />
                </div>
                <button className="botton" onClick={handleSubmit} type="submit">Finalizar Compra</button>
                <button className="botton" onClick={vaciarCarrito}> Cancelar Compra </button>
                </form>
            </div>


        </div>
    )
}

export default Checkout;