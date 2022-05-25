import React, { useEffect, useState } from 'react'
import ItemList from './Item/ItemList'
import ItemCount from './ItemCount/ItemCount'
import { Spinner } from 'react-bootstrap';


const ItemListContainer = ({ greet })  => {  

  const [listaJuegos, setListaJuegos] = useState ([])
  const [cargando, setCargando] = useState ([false])

  const juego = [
    { id: '1', nombre: 'DayZ', precio: '$2000', img: require('../assets/img/dayz.png'), className:'dayzPng', consola: 'PC' },
    { id: '2', nombre: 'Mass Effect Legendary Edition', precio: '$3500', img: require('../assets/img/me.png'), className:'mePng', consola: 'XBOX One'},
    { id: '3', nombre: 'Star Wars Battlefront 2', precio: '$800', img: require('../assets/img/swb2.png'), className:'swbPng', consola: 'PS4'},
    { id: '4', nombre: 'GTA V', precio: '$500', img: require('../assets/img/gtav.png'), className:'gtavPng', consola: 'PC'},
    { id: '5', nombre: 'Fall Guys', precio: '$700', img: require('../assets/img/fallguys.png'), className:'fgPng', consola: 'N Switch'},
    { id: '6', nombre: 'Dark Souls 3', precio: '$1600', img: require('../assets/img/ds3.png'), className:'ds3Png', consola: 'XBOX One'},
    { id: '7', nombre: 'Resident Evil 8', precio: '$3500', img: require('../assets/img/re8.png'), className:'re8Png', consola: 'PS4'},
    { id: '8', nombre: 'Age Of Empires 3', precio: '$600', img: require('../assets/img/aoe3.png'), className:'aoe3Png', consola: 'PC'},
    { id: '9', nombre: 'Star Wars: Jedi Fallen Order', precio: '$2000', img: require('../assets/img/jfo.png'), className:'jfoPng', consola: 'PC'},
    { id: '10', nombre: 'XCOM 2', precio: '$600', img: require('../assets/img/xcom.png'), className:'xcomPng', consola: 'PC' },
    { id: '11', nombre: 'Mortal Kombat 11', precio: '$1200', img: require('../assets/img/mk11.png'), className:'mk11Png', consola: 'PS4' },
    { id: '12', nombre: 'Halo: Master Chief Collection', precio: '$2500', img: require('../assets/img/halo.png'), className:'haloPng', consola: 'XBOX One' }
]


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