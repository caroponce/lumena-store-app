import { useState , createContext } from "react"

export  const CartContext = createContext({
    cart: []
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    
 const agregarProducto = (productoAgregar) => {
        if (!agregado(productoAgregar.id)) {
            setCart(prev => [...prev, productoAgregar ])
        }
    }

    



 const agregado = (id) => {
        return cart.some(prod => prod.id === id)
    }
    

    const eliminarProducto = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
}

    const getTotalProd = () => {
       
        return cart.reduce( (acc, prod) => acc += prod.count, 0 )
        
    }


    const getTotalPrice = () => {
        return cart.reduce( (acc, prod) => acc += (prod.price * prod.count), 0)
      }


    const vaciarCarrito = () => {
        setCart ([])
    }

 

    const totalProd = getTotalProd()
     const totalPrice = getTotalPrice ()
    return (
        <CartContext.Provider value={{ cart, agregarProducto, totalProd, eliminarProducto, vaciarCarrito, totalPrice}}> 
            {children}
        </CartContext.Provider>
    )
}