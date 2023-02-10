import './CartWidget.css'
import { Link } from 'react-router-dom';
const CartWidget = ({ quant }) => {
    return (
        <Link to='/cart' className='linktocart' >
            { <img  className='cart-pic' src='./images/cart.svg' alt='cart-widget'/> }
            {quant}
        </Link>
    )
}

export default CartWidget;