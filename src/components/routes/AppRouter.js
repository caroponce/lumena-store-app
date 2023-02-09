import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Cart from '../Cart/Cart';



const AppRouter = () => {
    return (
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Esto es Lumena Store. Encontrá todo lo de nuevo de la temporada SS2023'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    )
}

export default AppRouter;