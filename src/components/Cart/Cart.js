import { CartContext } from "./CartContext"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import CartItem from "./CartItem";
import './Cart.css'


const Cart = () => {
   // const {clear, cartList} = useCart()
    const navigate = useNavigate();
    const cctx = useContext(CartContext)

    return(
        <>
        <h1>¡Bienvenido al carrito!</h1>
        <div>

        {

           cctx.cartList.length !== 0

            ?   <div className="cartMapIf">

                    {cctx.cartList.map((prod)=><CartItem key ={prod.id} nombre={prod.nombre} img={prod.img} qty={prod.qty} precio={prod.precio} id={prod.id} />)}

                    <button onClick={cctx.clear} className='vaciarButton' >Vaciar Carrito</button>
                    <p className="pTotalPrice">El precio total es: ${cctx.totalPrice()} </p>

                </div>

            : <div className="cartMapElse">

                <p>No hay items en tu carro</p>

                <button onClick={()=>navigate('/')}>Ir a productos</button>

              </div>}
              </div>
        </>
    )
}

export default Cart