import React from 'react';
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { render } from '@testing-library/react';
import ItemCount from '../ItemCount/ItemCount.js';




const ItemDetail = ({juegos}) => {

    return(
        <img src={`${juegos.img}`} alt="Portada del juego" className='imgW' />,
        <h1 className='h1D'> {`${juegos.nombre}`} </h1>,
        <p className='descD'> {`${juegos.descripcion}`} </p>,
        <p className='consolaD'> {`${juegos.consola}`} </p>,
        <p className='precioD'> {`${juegos.precio}`} </p>,
        <p className='stockD'> {`${juegos.stock}`} </p>,
        <ItemCount initial={1} stock={`${juegos.stock}`} />
    )
}

export default ItemDetail