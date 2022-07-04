import React from 'react'
import { useCart } from './CartContext'
import './Cart.css'

const CartItem = ({id, img, nombre, qty, precio}) => {

    const{deleteJuego}= useCart()


  return (

    <div className='cartCard'>
        <img src={img} alt={nombre} className='imgCart'/>
        <div className='contentCart'>
        <p className='nombreCart'>{nombre}</p>
        <p className='qtyCart'>Cantidad:{qty}</p>
        <p className='precioCart'>Precio: ${precio}</p>
        </div>
        <button onClick={()=>deleteJuego(id)} className='buttonCart'>Borrar producto</button>
    </div>
  )
}

export default CartItem