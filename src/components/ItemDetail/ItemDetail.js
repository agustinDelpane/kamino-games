import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css'
import { Button } from 'react-bootstrap'
import { useCart } from '../Cart/CartContext.js';

const ItemDetail = ({juego}) => {
const {id, nombre, stock, precio, img} = juego
const [count, setCount] = useState(0);
const [compra, setCompra] = useState(false);
const navigate = useNavigate();
const {addToCart} = useCart()
const onAdd = () => {
    const juego ={
        id,
        nombre,
        stock,
        precio,
        img,
        qty:count
    }
    setCompra(true);
    addToCart(juego);

}


    return(
        <div>
            <img src={juego.imgw} alt="Portada del juego" className='imgW' />
            <h1 className='h1D'> {juego.nombre} </h1>
            <p className='descD'> {juego.descripcion} </p>
            <div className='conDiv'>
                <h2 className='h2D'>Consola:</h2>
                <p className='consolaD'> {juego.consola} </p>
            </div>
            <div className='preDiv'>
            <h2 className='h2Pre'>Precio:</h2>
            <p className='precioD'> {juego.precio} </p>
            </div>
            <div className='stoDiv'>
                <h2 className='h2Stock'>Stock:</h2>
                <p className='stockD'> {juego.stock} </p>
            </div>
            { compra ?<div>
                    <Button variant="primary" className='bSC' onClick={() => navigate('/')}>Seguir comprando...</Button>
                    <Button variant="success" className='bIC' onClick={() => navigate('/cart')}>Ir al carrito</Button>
                </div>
                
               : <ItemCount initial={1} stock={juego.stock} count={count} setCount={setCount} onAdd={onAdd} />
            }

        </div>
    )
}

export default ItemDetail