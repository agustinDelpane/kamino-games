import React, { useState, useContext } from 'react'
import db from '../FireBase/firebaseConfig';
import { doc, setDoc, collection, serverTimestamp, increment, updateDoc } from "firebase/firestore";
import { CartContext } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom'
import CheckoutItem from './CheckoutItem';
import './CheckoutItem.css'


const Checkout = () => {
    const [data, setData] = useState({})
    const [orderId, setOrderId] = useState(false)
    const cctx = useContext(CartContext)
    const navegar = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const createOrder = (event) => {
        event.preventDefault()
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
          buyer:data,
          total: cctx.totalPrice(),
          items: orderItems,
          date: serverTimestamp()
        };

       

        const firestoreOrder = async () => {
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }

      

        firestoreOrder()
          .then(result => setOrderId(result.id))
          .catch(err => console.log(err));    

        cctx.clear();
      }

    return (

        <div className='checkout'>
            {!orderId
            ? <>            
            <h1 className='h1CO'>Checkout</h1>
            <form onSubmit={createOrder} className='cOForm'>
              <p className='formPCO'>Ingresa tus datos para finalizar tu compra</p>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className='cONombre'
                    onChange={handleChange}
                /><br />
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='cOEmail1'
                    onChange={handleChange}
                /><br />
                <input
                    required
                    type="email2"
                    name="email2"
                    placeholder="Introduzca de nuevo su email"
                    className='cOEmail2'
                    onChange={handleChange}
                /><br />
                <input
                    required
                    type="phone"
                    name="phone"
                    placeholder="Teléfono"
                    className='cOTelefono'
                    onChange={handleChange}
                /><br />
                <input
                    type="submit"
                    value="Finalizar compra"
                    className='cOSubmit'
                />
            </form>
            <div className='cOItem'>
              {cctx.cartList.map((prod)=><CheckoutItem key ={prod.id} nombre={prod.nombre} img={prod.img} qty={prod.qty} precio={prod.precio} id={prod.id} />)}
                <p className="pTotalPriceCO">El precio total es: ${cctx.totalPrice()} </p>
            </div>
            </>
            :<>
            <div className='compraRealizada'>
              <p className='p1COF'>Muchas gracias por tu compra!</p>
              <p className='p2COF'>Tu orden es: {orderId}</p>
              <button onClick={()=>navegar('/')} className='bCOF'>Volver</button>
            </div>
            </>}

        </div>

    )

}



export default Checkout