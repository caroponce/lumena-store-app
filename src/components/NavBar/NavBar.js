import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"
import './NavBar.css'
const NavBar = () => {
    return (
        <nav>
            <div  className="ContenedorNavBar">
            
                <ul className="ListaNavBar">
                <Button name="ROPA" > </Button>
                <Button name="ACCESORIOS" > </Button>
                <Button name="PREGUNTAS FRECUENTAS" > </Button>
                <CartWidget></CartWidget>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar