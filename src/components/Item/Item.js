import '../juegos.js'
import { Card, Button } from 'react-bootstrap'

const Item = ({ nombre, img, precio, consola }) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            Precio = {precio} <br />
            Consola = {consola}
            </Card.Text>
            <Button variant="primary">Ver detalle</Button>
        </Card.Body>
        </Card>
    )
}

export default Item