import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Cart/CartContext';
import Checkout from './components/Cart/Checkout.js'
import MVFilter from './components/ItemFilter/MVFilter';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                <Route path='/producto/:idProducto' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/mas-vendidos' element={<MVFilter />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
