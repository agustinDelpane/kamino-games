import { useState } from "react"
import { Button } from 'react-bootstrap'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumarCount =() => {
        if (count < stock) {
            setCount (count+1)
        }
        else {
            console.log('Ya alcanzaste el máximo a comprar')
        }     
    };

    const restarCount =() => {
        if (count > initial) {
            setCount (count-1)
        }
        else {
            console.log('No puedes restar más elementos')
        }
    };

    const resetCount =() => {
        setCount (initial)
    };
    
    onAdd=() => {
        console.log(`¡Felicidades! Agregaste ${count} productos al carrito`) 
    }

    const agregar =() => {
        onAdd()
    }


    return (
        <div className="divCount">
            <label className="labelCount"> {count} </label>
            <Button variant="primary" onClick={sumarCount} className='buttonMas'>+</Button>
            <Button variant="danger" onClick={restarCount} className='buttonMenos'>-</Button>
            <Button variant="secondary" onClick={resetCount} className='buttonReset'>Reset</Button>
            <Button variant="success" size="lg" onClick={agregar} className='buttonCarrito'>Agregar al carrito</Button>
        </div>
    )
};


export default ItemCount