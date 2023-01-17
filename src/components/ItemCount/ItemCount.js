import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({initial = 1, stock}) => {

    const [count, setCount] = useState(initial)
    const restar = () => {
        if(count > 1) {            
        setCount(prev => prev - 1 )
        }
    }
    const sumar = () => {
        if (count < stock) {
         setCount(prev => prev + 1 )
        }
    }
    return (
        <div className="cont-count-item">
            <p className="count-item"> {count} </p>
            <button onClick={restar} className="restar"> - </button>
            <button> Agregar </button>      
            <button onClick={sumar} className="sumar">  +  </button>
        </div>
    )
}

export default ItemCount