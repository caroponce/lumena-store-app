import LUMENA from './LUMENA.jpg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/routes/AppRouter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <header className="App-header">
        <img src={LUMENA} className="App-logo" alt="logo" />
      </header>  
      <NavBar/>      
      <AppRouter />      
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
