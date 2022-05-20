import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = ({ greet })  => {
  return (
    <div>
        <h1>{ greet } </h1>
        <ItemCount initial={1} stock={5} />
    </div>
  )
}

export default ItemListContainer