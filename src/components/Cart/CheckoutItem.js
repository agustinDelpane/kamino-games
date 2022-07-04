import React from 'react'
import { useContext } from "react";
import { CartContext } from '../Cart/CartContext';
import './CheckoutItem.css'

const CheckoutItem = ({ img, nombre, qty, precio }) => {

    const cctx = useContext(CartContext)
 

    return (

        <div className='cOCard'>
            <img src={img} alt={nombre} className='imgCO'/>
            <div className='contentCO'>
                <h1 className='nombreCO'>{nombre}</h1>
                <p className='qtyCO'>Cantidad:{qty}</p>
                <p className='precioCO'>Precio: ${precio}</p>
            </div>
        </div>
    )
}

export default CheckoutItem