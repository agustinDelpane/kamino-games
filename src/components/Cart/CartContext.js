import { createContext, useContext, useState } from "react";



export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = juego =>{
        const itemInCart = cartList.find((prod) => prod.id === juego.id)
            if(itemInCart) {
                const upCart = cartList.map((prod) =>{
                    if(prod.id === juego.id){
                        return {...prod, qty: juego.qty + prod.qty}
                    }else{
                        return prod
                    }
                })
                setCartList(upCart)
            }else{
                setCartList([
                    ...cartList,
                    juego]);
            }
        
    }
    
    const clear = () => {
        setCartList([])
    }

    const deleteJuego = (id) => {
        setCartList(cartList.filter((prod) => prod.id !== id))
    }

    const isInCart = (id)=>{
        setCartList(cartList.find((prod) => prod.id === id))
    }

    const itemsInCart = () =>{
        return cartList.reduce((acc, prod) => acc += prod.qty, 0)
    }

    const totalPrice = () =>{
        return cartList.reduce((acc, prod) => acc += prod.precio * prod.qty, 0)
    }

return (
    <CartContext.Provider value={{cartList, addToCart, clear, deleteJuego, isInCart, itemsInCart, totalPrice}}>
        { children }
    </CartContext.Provider>
);

}

export const useCart = () => useContext(CartContext)

export default CartContextProvider