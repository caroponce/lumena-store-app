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
        let totalAgre = 0

        cart.forEach(prod => {
            totalAgre += prod.count
        })
        return totalAgre
    }

    const totalProd = getTotalProd()

    return (
        <CartContext.Provider value={{ cart, agregarProducto, totalProd, eliminarProducto }}> 
            {children}
        </CartContext.Provider>
    )
}