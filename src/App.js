import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                <Route path='/producto/:idProducto' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
