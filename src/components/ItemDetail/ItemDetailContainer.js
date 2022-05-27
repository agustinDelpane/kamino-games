import { useEffect, useState } from 'react'
import { juego } from '../juegos.js'
import ItemDetail from './ItemDetail.js'
import { Spinner } from 'react-bootstrap';

const ItemDetailContainer = ({ greet })  => {  

    const [dJuego, setDJuego] = useState ([])
    const [cargando, setCargando] = useState ([false])
  
    const getDJuego = new Promise ((resolve, reject) => {
    
      let condition = true
      setTimeout(() =>{
        if (condition) {
          resolve ( juego[0] )
        }else {
          reject('La promesa ha sido rechazada')
      }
    },2000)
    })
  
    useEffect (() => {
      setCargando (true)
      getDJuego
      .then ((resp) => setDJuego(resp))
      .catch ((error) => console.log(error))
      .finally (() => setCargando(false))
    }, [])
    
    console.log(dJuego)

    return(
        <>
        {cargando ? <Spinner animation="border"></Spinner> : <ItemDetail juegos={ dJuego } /> }
        </>
    )}

export default ItemDetailContainer