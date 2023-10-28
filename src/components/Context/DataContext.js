import { createContext, useEffect, useState } from "react";
import {getFirestore, doc, getDoc, collection, getDocs} from "firebase/firestore";
import axios from "axios";
export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        //axios("productos.json") .then((respuesta) => setData(respuesta.data));

        const db = getFirestore();

        const itemCollection = collection(db,"productos");
        getDocs(itemCollection).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })


        }
    , []);

        const agregarProductos = (productos) =>{ 
            const productosrepeat = cart.find((item) => item.id === productos.id);
            if (productosrepeat){
                setCart( cart.map ((item) => (item.id === productos.id ? {...productos, quanty: productosrepeat.quanty + 1 }: item)));
            } else {
                setCart([...cart, productos]);
            }
            };
            const db = getFirestore();
            
            
            const total = cart.reduce((acc,el) => acc + el.precio * el.quanty, 0);

            const limpiarCarrito = () => {setCart([])}

    return <dataContext.Provider value={{data, cart, setCart, agregarProductos,total,limpiarCarrito,db}}>{children}</dataContext.Provider>
};

export default DataProvider;