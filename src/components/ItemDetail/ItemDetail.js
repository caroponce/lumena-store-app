import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


const ItemDetail = ({id, name, img, price, description, stock}) => {
 return (
    <div className="cont-item-detail">

       
        
        
        <img className="item-detail-img" src={img} alt={name}/>
        <h4 className="item-detail-name"> {name} </h4>
        <p className="item-detail-price"> ${price} </p>
        <p className="item-detail-des"> {description} </p>
        <ItemCount stock={stock} className="item-ditail-count"/>
        
        
    </div>
 )
}

export default ItemDetail;