import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
