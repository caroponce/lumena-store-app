import LUMENA from './LUMENA.jpg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LUMENA} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Esto es Lumena Store. Encontrá todo lo de nuevo de la temporada SS2023'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
