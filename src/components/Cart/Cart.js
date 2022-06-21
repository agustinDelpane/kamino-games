import { CartContext } from "./CartContext"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import CartItem from "./CartItem";
import './Cart.css'
import db from '../FireBase/firebaseConfig';
import { doc, setDoc, collection, serverTimestamp, increment, updateDoc } from "firebase/firestore";
import { Button } from "react-bootstrap"


const Cart = () => {
   // const {clear, cartList} = useCart()
    const navigate = useNavigate();
    const cctx = useContext(CartContext)

    const createOrder = () => {
        const orderItems = cctx.cartList.map(prod => ({
          id: prod.id,
          nombre: prod.nombre,
          precio: prod.precio,
          cantidad: prod.qty
        }));
    
        cctx.cartList.forEach(async (prod) => {
          const prodRef = doc(db, "juegos", prod.id);
          await updateDoc(prodRef, {
            stock: increment(-prod.qty)
          });
        });
    
        let order = {
          buyer: {
            name: "Agustín Delpane",
            email: "agustindelpane@gmail.com",
            phone: "355666789"
          },
          total: cctx.totalPrice(),
          items: orderItems,
          date: serverTimestamp()
        };
      
        console.log(order);
        
        const firestoreOrder = async () => {
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        firestoreOrder()
          .then(result => alert('¡Tu compra ha sido realizada con éxito!.\n\n\nEl id de la transacción es: ' + result.id))
          .catch(err => console.log(err));
      
        cctx.clear();
      
      }

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
                    <Button variant="success" onClick={createOrder}>Finalizar compra</Button>

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