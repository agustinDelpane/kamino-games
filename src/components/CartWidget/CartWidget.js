import React from 'react'
import {Badge}  from 'react-bootstrap'
import './CartWidget.css'

function CartWidget() {
  return (
    <>
    <img src={require('../../assets/img/cart.png')} className='cartPng' alt='Cart' /> <Badge pill bg="success" className='badge4'>
    4
  </Badge>
    </>
    )
}

export default CartWidget