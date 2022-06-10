import React from 'react'
import {Badge}  from 'react-bootstrap'
import { useCart } from '../Cart/CartContext'
import './CartWidget.css'

function CartWidget() {
  const {itemsInCart} = useCart()
  return (
    <>
    <img src={require('../../assets/img/cart.png')} className='cartPng' alt='Cart' /> <Badge pill bg="success" className='badge4'>
    {itemsInCart() || ''}
  </Badge>
    </>
    )
}

export default CartWidget