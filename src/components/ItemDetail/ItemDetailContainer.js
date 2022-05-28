import { useEffect, useState } from 'react'
import { getJuegos } from '../juegos.js'
import ItemDetail from './ItemDetail.js'
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = ()  => {  

    const [juego, setJuego] = useState ([])
    const [cargando, setCargando] = useState ([false])
  
  
    useEffect (() => {
      setCargando (true)
      getJuegos
      .then ((resp) => setJuego(resp[0]))
      .catch ((error) => console.log(error))
      .finally (() => setCargando(false))
    }, [])
    
    console.log(juego)

    return(
        <>
        {cargando ?  <><br /> <Spinner animation="border"></Spinner></> : <ItemDetail juego={ juego } /> }
        </>
    )}

export default ItemDetailContainer