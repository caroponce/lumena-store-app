import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from '../CartList/CartList'
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, vaciarCarrito, totalPrice} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <h1> Carrito Vacio </h1>
        )
    }

    return (
        <div>
            <h1> Carrito de Compras </h1>
            <CartList cart={cart}/>
            <h1> Total ${totalPrice}</h1>
            <Link to='/checkout'> Finalizar Compra </Link>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        </div>
    )
}

export default Cart;