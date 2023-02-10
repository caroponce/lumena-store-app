import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemCart.css'

const ItemCart = ( {name, count, price, id} ) => {

    const { eliminarProducto } = useContext(CartContext)

    return (
        
        <div className="item-cart">
            <h2> {name} </h2>
            <h2> cantidad {count} </h2>
            <h2> $ {price} </h2>
            <h2> Sub total $ {price * count}</h2>
            <button onClick={ () => eliminarProducto(id)}> X </button>
        </div>
        
    )
}

export default ItemCart;