import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemDetail = ({juego}) => {
    const [itemCount, setItemCount] = useState(0)

    const onAdd = (qty) => {
        console.log('¡Has agregado ' + qty + ' al carrito!')
        setItemCount(qty)
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

        {
            itemCount === 0 
                ? <ItemCount stock={juego.stock} initial={itemCount} onAdd={onAdd} />
                : <Link to='/cart'><Button variant="danger">Checkout</Button></Link>
        }   
        
        </div>
    )
}

export default ItemDetail