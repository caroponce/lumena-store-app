import LUMENA from './LUMENA.jpg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LUMENA} className="App-logo" alt="logo" />
      </header>
      <NavBar className="nav-bar"></NavBar>
      <ItemListContainer greeting={"Esto es Lumena Store. Encontrá todo lo de nuevo de la temporada SS2023"}> </ItemListContainer>
    </div>
  );
}

export default App;
