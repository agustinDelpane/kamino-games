import React, { useEffect, useState } from 'react'
import ItemList from './Item/ItemList'
import ItemCount from './ItemCount/ItemCount'
import { Spinner } from 'react-bootstrap';
import { juego } from './juegos.js'


const ItemListContainer = ({ greet })  => {  

  const [listaJuegos, setListaJuegos] = useState ([])
  const [cargando, setCargando] = useState ([false])

  const getJuegos = new Promise ((resolve, reject) => {
  
    let condition = true
    setTimeout(() =>{
      if (condition) {
        resolve ( juego )
      }else {
        reject('La promesa ha sido rechazada')
    }
  },2000)
  })

  useEffect (() => {
    setCargando (true)
    getJuegos
    .then ((resp) => setListaJuegos(resp))
    .catch ((error) => console.log(error))
    .finally (() => setCargando(false))
  }, [])
  
  console.log(listaJuegos)

  return (
    <div>
        <h1>{ greet } </h1>
        <ItemCount initial={1} stock={5} />
        <br />
        {cargando ? <Spinner animation="border"></Spinner> : <ItemList listaJuegos={ listaJuegos } /> }
    </div>
  )
}

export default ItemListContainer