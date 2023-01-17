import { Link } from "react-router-dom";
import './Item.css'

const Item = ({id, name, price, img}) => {
    return (
        <div>
            <h4 className="item-name"> {name} </h4>
            <img className="item-img" src={img} alt={name}/>
            <p> ${price} </p>
            <Link className="item-link" to={`/item/${id}`}> Más información </Link>
        </div>
    )
}

export default Item;