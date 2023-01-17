import Item from "../Item/Item";

const ItemList = ({products}) => {
    return(
        <div     style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',}}
             >    
        {products.map(prod => <Item key={prod.id}{...prod} />)}
        </ div>
    )

}

export default ItemList;
