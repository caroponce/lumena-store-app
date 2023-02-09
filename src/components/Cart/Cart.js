import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from '../CartList/CartList'

const Cart = () => {

    const { cart } = useContext(CartContext)

    return (
        <div>
            <h1> Carrito de Compras </h1>
            <CartList cart={cart}/>
            <button> Finalizar Compra</button>
        </div>
    )
}

export default Cart;