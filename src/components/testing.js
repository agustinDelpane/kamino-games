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
    

          <img src={`${juego.img}`} alt="Portada del juego" className='imgW' />,

          <img src={`${juego.img}`} alt="Portada del juego" className='imgW' />,
          <h1 className='h1D'> {`${juego.nombre}`} </h1>,
          <p className='descD'> {`${juego.descripcion}`} </p>,
          <p className='consolaD'> {`${juego.consola}`} </p>,
          <p className='precioD'> {`${juego.precio}`} </p>,
          <p className='stockD'> {`${juego.stock}`} </p>