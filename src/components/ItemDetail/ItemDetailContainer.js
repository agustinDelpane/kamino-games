import { useEffect, useState } from 'react'
import { getJuegos } from '../juegos.js'
import ItemDetail from './ItemDetail.js'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ()  => {  

    const [juego, setJuego] = useState ([])
    const [cargando, setCargando] = useState (false)
    const { idProducto } = useParams () 
  
  
    useEffect (() => {
      setCargando (true)
      getJuegos
      .then ((resp) => {
        if (idProducto) {
          setJuego(resp.find((juegos) => juegos.id === idProducto))
        }else {
          setJuego(resp)
        }
      })
      .catch ((error) => console.log(error))
      .finally (() => setCargando(false))
    }, [idProducto])
    
    console.log(juego)

    return(
        <>
        {cargando ?  <><br /> <Spinner animation="border"></Spinner></> : <ItemDetail juego={ juego } /> }
        </>
    )}

export default ItemDetailContainer