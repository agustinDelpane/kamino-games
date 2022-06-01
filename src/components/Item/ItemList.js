import { useEffect } from "react";
import Item from "./Item";



const ItemList = ({ listaJuegos }) => {

    
    return(
        <div className="container">
            <div className="row">
                {listaJuegos.map(prod => (
                <div key={prod.id} id="cardItem" className="col-lg-3">
                    <Item key = {prod.id} id={prod.id} categoria={prod.categoria} novedades={prod.novedades} nombre={prod.nombre} img={prod.img} precio={prod.precio} consola={prod.consola} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList