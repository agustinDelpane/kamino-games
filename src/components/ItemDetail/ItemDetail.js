import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css'

const ItemDetail = ({juego}) => {

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
        <ItemCount initial={1} stock={juego.stock} />
        </div>
    )
}

export default ItemDetail