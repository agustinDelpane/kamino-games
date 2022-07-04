juego.map(prod => <Item key = {prod.id} nombre={prod.nombre} img={prod.img} precio={prod.precio} />),

<ItemListContainer greet='Hola, bienvenido!' />,

<img src={`${juegos.imgw}`} alt="Portada del juego" className='imgW' />,
        <h1 className='h1D'> {`${juegos.nombre}`} </h1>,
        <p className='descD'> {`${juegos.descripcion}`} </p>,
        <p className='consolaD'> {`${juegos.consola}`} </p>,
        <p className='precioD'> {`${juegos.precio}`} </p>,
        <p className='stockD'> {`${juegos.stock}`} </p>,

        function AlertDismissibleExample() {
            const [show, setShow] = useState(true);
          
            if (show) {
              return (
                <Alert variant="dark" onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>¡Usted ha seleccionado productos para su carrito!</Alert.Heading>
                  <p>
                    ¡Felicidades! Usted ha seleccionado {`${count}`} del producto "{`${juegos.nombre[0]}`}"
                  </p>
                </Alert>
              );
            }
            return <Button onClick={() => setShow(true)}>Show Alert</Button>;
          }
          
          render(<AlertDismissibleExample />);
    

          <img src={`${juego.img}`} alt="Portada del juego" className='imgW' />


         /* background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;*/

          <BrowserRouter />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/id:Categoria' element={ <ItemListContainer /> } />
          </Routes>



.then (juegos.filter (juego =>{
  if (idCategoria === undefined) return juego;
  return juegos.categoria === idCategoria}));

  <div>

  <img src={img} alt={nombre} className='imgCart'/>

  <p>{nombre}</p>

  <p>Cantidad:{qty}</p>

  <p>Precio: {precio}</p>

  <button onClick={()=>deleteJuego(id)}>Borrar producto</button>

</div>

width: 3%;
position: relative;
right: -85px;


useEffect (() => {
  setCargando (true)
  firebaseFetch
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


const [data, setData] = useState({})

const handleChange = (event) => {
  const { name, value } = event.target;
  setData({ ...data, [name]: value });
}


[core]
	editor = \"C:\\Users\\AgustinPC\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code\" --wait
