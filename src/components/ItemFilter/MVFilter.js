import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { firestoreFetchMV } from '../FireBase/firebaseFetch.js';
import ItemDetail from '../ItemDetail/ItemDetail.js';



const MVFilter = () => {

    const [listaJuegos, setListaJuegos] = useState ([]);
    const [cargando, setCargando] = useState (false)
    const { MVid } = useParams () 


    useEffect (() => {
        setCargando (true)
        firestoreFetchMV(MVid)
          .then(resp => setListaJuegos(resp))
          .catch ((error) => console.log(error))
          .finally (() => setCargando(false))
      }, [MVid])

    return(
        <>
        {cargando ?  <><br /> <Spinner animation="border"></Spinner></> : <ItemDetail juego={ listaJuegos } /> }
        </>
    )
}

export default MVFilter