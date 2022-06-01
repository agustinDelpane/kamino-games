import '../juegos.js'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ nombre, img, precio, consola, categoria, id, novedades }) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            Precio = {precio} <br />
            Consola = {consola}
            </Card.Text>
            <Link to={`/producto/${id}`}>
                <Button variant="primary">Ver detalle</Button>
            </Link>
        </Card.Body>
        </Card>
    )
}

export default Item