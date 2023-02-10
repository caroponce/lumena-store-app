import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';



const AppRouter = () => {
    return (
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Esto es Lumena Store. Encontrá todo lo de nuevo de la temporada SS2023'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    )
}

export default AppRouter;