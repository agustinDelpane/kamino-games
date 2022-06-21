import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail.js'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { firestoreFetchId } from '../FireBase/firebaseFetch.js';

const ItemDetailContainer = ()  => {  

    const [juego, setJuego] = useState ([])
    const [cargando, setCargando] = useState (false)
    const { idProducto } = useParams () 
  
  
    useEffect (() => {
      setCargando (true)
      firestoreFetchId(idProducto)
      .then(resp => setJuego(resp))
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