import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <div  className="ContenedorNavBar">
            
                <ul className="ListaNavBar">
                <Link className="link-ropa" to='/'> INICIO </Link>
                <Link className="link-ropa" to='/category/top'> Tops </Link>
                <Link className="link-ropa" to='/category/vestido'> Vestidos </Link>
                <Link className="link-ropa" to='/category/camisa'> Camisas </Link>
                <Link className="link-ropa" to='/category/falda'> Faldas </Link>
                
                <CartWidget></CartWidget>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar