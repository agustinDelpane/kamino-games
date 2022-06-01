import React, { useEffect, useState } from 'react'
import ItemList from './Item/ItemList'
import ItemCount from './ItemCount/ItemCount'
import { Spinner } from 'react-bootstrap';
import { getJuegos, juegos } from './juegos.js'
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greet })  => {  

  const [listaJuegos, setListaJuegos] = useState ([]);
  const [cargando, setCargando] = useState (false);
  const { idCategoria } = useParams ();

  useEffect (() => {
    setCargando (true)
    getJuegos
    .then ((resp) => {
      if (idCategoria) {
        setListaJuegos(resp.filter((juegos) => juegos.categoria === idCategoria))
      }else {
        setListaJuegos(resp)
      }
    })
    .catch ((error) => console.log(error))
    .finally (() => setCargando(false))
  }, [idCategoria])
  
  console.log(listaJuegos)

  return (
    <div>
        <h1>{ greet } </h1>
        <br />
        {cargando ? <Spinner animation="border"></Spinner> : <ItemList listaJuegos={ listaJuegos } /> }
    </div>
  )
}

export default ItemListContainer