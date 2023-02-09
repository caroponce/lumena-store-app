import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {

    const {totalProd} = useContext(CartContext)
    return (
        <nav>
            <div  className="ContenedorNavBar">
            
                <ul className="ListaNavBar">
                <Link className="link-ropa" to='/'> INICIO </Link>
                <Link className="link-ropa" to='/category/top'> Top </Link>
                <Link className="link-ropa" to='/category/vestido'> Vestidos </Link>
                <Link className="link-ropa" to='/category/camisa'> Camisas </Link>
                <Link className="link-ropa" to='/category/falda'> Faldas </Link>                
                <CartWidget quant={totalProd}/>
                </ul>
                
            </div>
            
        </nav>
    )
}

export default NavBar