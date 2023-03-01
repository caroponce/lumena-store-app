import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({id, name, img, stock, price, description, category}) => {
    
    const [count, setCount] = useState(0)
    
    const {agregarProducto} = useContext(CartContext)



    const agregarCarrito = (count) => {
        setCount(parseInt(count))

        agregarProducto({id, name, count, price})
    }

 return (
    <div className="cont-item-detail">

       
        
        
        <img className="item-detail-img" src={img} alt={name}/>
        <h4 className="item-detail-name"> {name} </h4>
        <p className="item-detail-price"> ${price} </p>
        <p className="item-detail-des"> {description} </p>
        <p> {category} </p>
        
        {
            count > 0 ? (
                <Link to='/cart'>Finalizar Compra</Link>
            ) : (
                <ItemCount stock={stock} onAdd={agregarCarrito} className="item-ditail-count"/>

            )
        }
        
        
    </div>
 )
}

export default ItemDetail;